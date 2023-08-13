import { KeywordService } from 'src/app/service/keyword.service';
import { Router, ActivatedRoute } from '@angular/router';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editkey',
  templateUrl: './editkey.component.html',
  styleUrls: ['./editkey.component.css']
})
export class EditkeyComponent implements OnInit {

  key:any={}
  id:any
  constructor(private snack:MatSnackBar,private _keysave:KeywordService,private rout:Router,private routid:ActivatedRoute){
  

  }
  ngOnInit(): void {
   this.id= this.routid.snapshot.params['id']
  this._keysave.getkeytemplateByid(this.id).subscribe({
    next:(data:any)=>{
      this.key=data
     this.option=data['keyword']
     this.checkarr=true
      console.log(data['keyword']);
     this.keysaveform=new FormGroup({
        name:new FormControl(data['name'],[Validators.required]),
        description:new FormControl(data['description'],[Validators.required]),
        keyword:new FormArray([],[Validators.required])
       
      })
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
   console.log(this.id)
   console.log(this.key);
   
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

    
    this.option.splice(id,1)
    this.snack.open("Delete Successfully !!","Ok",{
      duration:3000,
      verticalPosition:'bottom'
    })
    
  }
  formsubmit(){
    console.log(this.keysaveform.value);
   
    this._keysave.updatekeyByid(this.keysaveform.value,this.id).subscribe({
      next:(res)=>{
        console.log(res);
        Swal.fire({
          title: 'Keyword Template Updated Successfully !!',
         
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
