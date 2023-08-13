import { FiletypeService } from 'src/app/service/filetype.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { KeywordService } from 'src/app/service/keyword.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filtype-dashboard',
  templateUrl: './filtype-dashboard.component.html',
  styleUrls: ['./filtype-dashboard.component.css']
})
export class FiltypeDashboardComponent implements OnInit {
 
  tem:any=[]


  constructor(private file:FiletypeService,private rout:Router,private matsnack:MatSnackBar){
   
  }
  ngOnInit(): void {
    this.file.getallfiletypepattern().subscribe({
      next:(data)=>{
        this.tem=data
      }
    })
  }
  vali=true

  clickfun(){
this.vali=false
  }
  updatekey(id:any){
   
    this.rout.navigate(['/admin/filetype/editfiletype',id])
    
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
        
      this.file.deletefiletype(id).subscribe({
        next:(data)=>{
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your filetype has been deleted.',
            'success'
          )
          setTimeout(()=>{                           // <<<---using ()=> syntax
          location.reload()
        }, 3000);
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
