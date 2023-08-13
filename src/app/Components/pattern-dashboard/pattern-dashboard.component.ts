import { PatternService } from './../../service/pattern.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-pattern-dashboard',
  templateUrl: './pattern-dashboard.component.html',
  styleUrls: ['./pattern-dashboard.component.css']
})
export class PatternDashboardComponent {

  tem:any=[]


  constructor(private pattern:PatternService,private rout:Router,private matsnack:MatSnackBar){
    this.pattern.getpattern().subscribe({
   
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
   
    this.rout.navigate(['/admin/pattern/editpattern',id])
    
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
        this.pattern.deletepattern(id).subscribe({
          next:(res)=>{
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your Pattern has been deleted.',
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
          'Your Pattern Template is safe :)',
          'error'
        )
      }
    })
   

  }

  
}
