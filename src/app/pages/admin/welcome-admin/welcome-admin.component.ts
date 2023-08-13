import { Component } from '@angular/core';
import { DownloadService } from 'src/app/service/download.service';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent {
  constructor(private down:DownloadService){
    
  }
  id="a555a972-85e8-45b2-ad0c-77dd8772d183"
  download(){
    this.down.downloads(this.id).subscribe({
      next:(response:any)=>{
        let filename="Content Detection.pptx"
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
