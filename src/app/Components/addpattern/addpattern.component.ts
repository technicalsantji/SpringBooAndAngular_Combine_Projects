
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PatternService } from 'src/app/service/pattern.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addpattern',
  templateUrl: './addpattern.component.html',
  styleUrls: ['./addpattern.component.css']
})
export class AddpatternComponent {

  constructor(private snack:MatSnackBar,private _pattern:PatternService,private rout:Router){
  }
  option:string[]=[];

  patternsaveform=new FormGroup({
    name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    pattern:new FormArray([],[Validators.required])
   
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
  
          this.snack.open("this Pattern Already Exists !!","Ok",{
            duration:3000
          })
        }
        break;
      
        
      }
    
    }
   

    
   }else{
    this.snack.open("Please Enter the Pattern  !!","Ok",{
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
    console.log(this.patternsaveform.value);
    this._pattern.createpattren(this.patternsaveform.value).subscribe({
      next:(res)=>{
        console.log(res);
        Swal.fire({
          title: 'Pattern Template Saved Successfully !!',
         
          icon:'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

        this.rout.navigate(['/admin/pattern'])
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
    
  }
  get func(){
    return this.patternsaveform.controls
  }
  onchange(val:any){
   const checkedvalue= val.target.value
   const checked=val.target.checked
    console.log(checkedvalue,checked);
    const checkedarray=this.patternsaveform.get('pattern') as FormArray;

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
