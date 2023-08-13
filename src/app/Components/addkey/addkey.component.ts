import { Router } from '@angular/router';
import { KeywordService } from './../../service/keyword.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addkey',
  templateUrl: './addkey.component.html',
  styleUrls: ['./addkey.component.css']
})
export class AddkeyComponent {
  

  constructor(private snack:MatSnackBar,private _keysave:KeywordService,private rout:Router){
  }
  option:string[]=[];

  keysaveform=new FormGroup({
    name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    keyword:new FormArray([],[Validators.required])
   
  })
  
  checkarr=false;
  addkey(data:any){
    console.log(this.option.length);
    if(data.length>0)
   {

    if(this.option.length==0)
    {
      this.option.push(data)
      this.checkarr=true
      
    }else if(this.option.length>0){
      for (let i = 0; i < this.option.length; i++) {
        if(!this.option[i].includes(data)){
  
          this.option.push(data)
          this.checkarr=true
          
        }
        else{
  
          this.snack.open("this keyword Already Exists !!","Ok",{
            duration:3000
          })
        }
        break;
      
        
      }
    
    }
   

    
   }else{
    this.snack.open("Please Enter the Keyword  !!","Ok",{
      duration:3000,
      verticalPosition:'bottom'
    })

   }
  
  }

  deletekey(id:any){

    console.log(id);
    this.option.splice(id,1)
    this.snack.open("Delete Successfully !!","Ok",{
      duration:3000,
      verticalPosition:'bottom'
    })
    
  }
  formsubmit(){
    console.log(this.keysaveform.value);
    this._keysave.createkeyword(this.keysaveform.value).subscribe({
      next:(res)=>{
        console.log(res);
        Swal.fire({
          title: 'Keyword Template Saved Successfully !!',
         
          icon:'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

        this.rout.navigate(['/admin/keyword'])
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
    
  }
  get func(){
    return this.keysaveform.controls
  }
  onchange(val:any){
   const checkedvalue= val.target.value
   const checked=val.target.checked
    console.log(checkedvalue,checked);
    const checkedarray=this.keysaveform.get('keyword') as FormArray;

    if (checked) {
      
      checkedarray.push(new FormControl(checkedvalue))
    }else{
      let i:number=0;
      checkedarray.controls.forEach((item)=>{
        if (item.value==checkedvalue) {
          checkedarray.removeAt(i)
        }
        i++;
      })

    }
    
  }

  
  

}
