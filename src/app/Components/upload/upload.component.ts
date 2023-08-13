import { FileoperationService } from './../../service/fileoperation.service';

import { TemplateService } from './../../service/template.service';
import { Component, OnInit } from '@angular/core';
import { UploadsService } from 'src/app/service/uploads.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FileopService } from 'src/app/service/fileop.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFiles:any;
  currentFile:any;
  progress = 0;
  message = '';
  fileInfos:any;
  temlist:any=[]
  templateid=''
  statusdata:any=[]
  isst=false
constructor(private tem:TemplateService,private uploadService:FileoperationService,private fileop:FileoperationService,private getfile:FileopService){


}

  ngOnInit(): void {

this.getfile.getallfileop().subscribe({
  next:(data:any)=>{
   
this.statusdata=data
console.log(data[0].processingstate);
if (data[0].processingstate=='Pending') {
  console.log("pending");
  this.isst=false
  
}
if (data[0].processingstate=='completed') {
  console.log("completed");
  this.isst=true
  
}


  }
})



    this.tem.getalltemplate().subscribe({
      next:(data:any)=>{

        this.temlist=data
      }
    })
  }

  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
  upload(id:any) {
    console.log("id getting"+id.value);
    
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile,id.value).subscribe(
      (data:any)=> {
        console.log(data);
        
        Swal.fire({
          title: 'Upload Successfully  !! ',
          icon:'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
       
      },
      (err:any)=> {
        Swal.fire({
          title: 'Something Went Wrong please try again !! ',
          icon:'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      });
  
    this.selectedFiles= undefined;
  }

}
