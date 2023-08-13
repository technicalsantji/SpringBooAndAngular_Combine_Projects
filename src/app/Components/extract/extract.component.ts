
import { Component } from '@angular/core';
import { UploadsService } from 'src/app/service/uploads.service';
import Swal from 'sweetalert2';
import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent {
  public Editor = ClassicEditor;
  selectedFiles:any;
  currentFile:any;
  progress = 0;
  message = '';
  fileInfos:any;
  metaarr:any;
  expressions=false;
  constructor(private uploadService:UploadsService){
    
  
  }
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }
 
  submittext(){
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.textextract(this.currentFile).subscribe({
      next:(data:any)=>{
        this.expressions=true
        console.log("success");
        this.metaarr=data
        console.log(data);
        
      
        
      },
      error:(err)=>{
        console.log(err);
        
      //  this.message=err.error.text
      //  if(err.error.text)

      //  {
      //   Swal.fire({
      //     title: 'Successfully Extract text from your File',
      //     icon:'success',
      //     showClass: {
      //       popup: 'animate__animated animate__fadeInDown'
      //     },
      //     hideClass: {
      //       popup: 'animate__animated animate__fadeOutUp'
      //     }
      //   })

      //  }
      //  else{

      //   Swal.fire({
      //     title: 'This File not exists . please upload then again try!',
      //     showClass: {
      //       popup: 'animate__animated animate__fadeInDown'
      //     },
      //     hideClass: {
      //       popup: 'animate__animated animate__fadeOutUp'
      //     }
      //   })
      //  }
        
        
        
      }
    })
    
  

  }
}
