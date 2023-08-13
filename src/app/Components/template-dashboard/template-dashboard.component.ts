import { TemplateService } from './../../service/template.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-dashboard',
  templateUrl: './template-dashboard.component.html',
  styleUrls: ['./template-dashboard.component.css']
})
export class TemplateDashboardComponent implements OnInit{
  tem:any=[]


  constructor(private rout:Router,private matsnack:MatSnackBar,private _tem:TemplateService){
   
  }
  ngOnInit(): void {
    this._tem.getalltemplate().subscribe({
      next:(res)=>{
        console.log(res);
        this.tem=res
      }
    })
  }

  vali=true

  clickfun(){
this.vali=false
  }
  updatekey(id:any){
   
    this.rout.navigate(['/admin/tem/edittem',id])
    
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
       this._tem.deletetemplate(id).subscribe({
        next:(data:any)=>{
          swalWithBootstrapButtons.fire(
            'Deleted',
            'Your  Template Deleted Successfully !! :)',
            'success'
          )
          setTimeout(() => {
            window.location.reload()
          }, 1000);
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

