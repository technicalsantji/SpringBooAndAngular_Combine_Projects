import { DownloadService } from 'src/app/service/download.service';
import { HttpEventType, HttpProgressEvent, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadsService } from 'src/app/service/uploads.service';


@Component({
  selector: 'app-content-managements',
  templateUrl: './content-managements.component.html',
  styleUrls: ['./content-managements.component.css']
})
export class ContentManagementsComponent implements OnInit {

  selectedFiles:any;
  currentFile:any;
  progress = 0;
  message = '';
  fileInfos:any;

  constructor(private down:DownloadService,private uploadService:UploadsService,) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }
  

  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      (data:any)=> {
       
        if (data.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * data.loaded / data.total);
        } else if (data instanceof HttpResponse) {
          this.message = data.body.message;
          this.fileInfos = this.uploadService.getFiles();
          console.log(this.uploadService.getFiles());
          
        }
      },
      (err)=> {
        console.log(err);
        
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile =undefined;
      });
  
    this.selectedFiles= undefined;
  }
  
  download(id:any){
    this.down.downloads(id).subscribe({
      next:(response:any)=>{
        let filename=name
      let blob:Blob=response.body as Blob;
      let a:any=document.createElement('a');
      a.download=filename;
      a.href=window.URL.createObjectURL(blob);
      a.click();
      }
    }
    )
  }
}
  


