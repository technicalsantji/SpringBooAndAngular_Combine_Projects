import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { KeywordService } from 'src/app/service/keyword.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-keyword-dashboard',
  templateUrl: './keyword-dashboard.component.html',
  styleUrls: ['./keyword-dashboard.component.css']
})
export class KeywordDashboardComponent  {
 
tem:any=[]


  constructor(private keytem:KeywordService,private rout:Router,private matsnack:MatSnackBar){
    this.keytem.getkeytemplate().subscribe({
   
      next:(data:any)=>{
this.tem=data
console.log(data);


      },
      error:(err)=>{
        console.log(err);
        
      }
    
      
    })
  }
  vali=true

  clickfun(){
this.vali=false
  }
  updatekey(id:any){
   
    this.rout.navigate(['/admin/keyword/editkey',id])
    
  }



  deletekeybtn(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.keytem.deletekey(id).subscribe({
          next:(res)=>{
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your Keywordtemplate has been deleted.',
              'success'
            )
            setTimeout(()=>{                           // <<<---using ()=> syntax
            location.reload()
          }, 3000);
           
          },
          error:(err)=>{
            console.log(err);
            
          }
        })
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your Keyword Template is safe :)',
          'error'
        )
      }
    })
   

  }

  
}
