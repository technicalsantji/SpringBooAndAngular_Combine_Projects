import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { FiletypeService } from 'src/app/service/filetype.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editfile',
  templateUrl: './editfile.component.html',
  styleUrls: ['./editfile.component.css']
})
export class EditfileComponent {

  option:string[]=[];
  fileall:any=[]
  selectedGame:any
  id:any
  constructor(private snack:MatSnackBar,private rout:Router,private _file:FiletypeService,private routid:ActivatedRoute){
  }

  ngOnInit(): void {
    this.getfiletype()
    this.id= this.routid.snapshot.params['id']
    this._file.getfiletypebyid(this.id).subscribe({
      next:(data:any)=>{

        this.option=data['filetype']
        this.checkarr=true
       this.keysaveform=new FormGroup({
          name:new FormControl(data['name'],[Validators.required]),
          descriptions:new FormControl(data['descriptions'],[Validators.required]),
          monitor:new FormControl(data['monitor']),
          filetype:new FormArray([],[Validators.required])
         
        })
      }
    })

  }

  getfiletype(){
    this._file.getallfiletype().subscribe({
      next:(data:any)=>{
        this.fileall=data
        console.log(data);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  
  

  keysaveform=new FormGroup({
    name:new FormControl('',[Validators.required]),
    descriptions:new FormControl('',[Validators.required]),
    monitor:new FormControl(''),
    filetype:new FormArray([],[Validators.required])
   
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
  updateform(){
    console.log(this.keysaveform.value);
    this._file.updatefiletype(this.keysaveform.value,this.id).subscribe({
      next:(data)=>{
        console.log(data);
        Swal.fire({
          title: 'File Type Template Update Successfully !!',
         
          icon:'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

        this.rout.navigate(['/admin/filetype'])
        
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
    const checkedarray=this.keysaveform.get('filetype') as FormArray;

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
