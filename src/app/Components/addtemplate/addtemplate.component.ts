import { TemplateService } from './../../service/template.service';
import { PatternService } from './../../service/pattern.service';
import { KeywordService } from './../../service/keyword.service';
import { FiletypeService } from './../../service/filetype.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-addtemplate',
  templateUrl: './addtemplate.component.html',
  styleUrls: ['./addtemplate.component.css'],
})
export class AddtemplateComponent implements OnInit {
  option: any = [
    'Open this select Rule type',
    'file type Rule',
    'keyword Rule',
    'pattern Rule',
  ];
  filerulename: any = [];
  keywordrulename: any = [];
  patternrulename: any = [];
  filerule = false;
  keywordrule = false;
  patternrule = false;
  intial = true;
  fid=''
  cherr = false;
  defselected = '';
  selectedGame:any=''
  onkey=false
  onpatt=false
  onfile=false
  constructor(
    private file: FiletypeService,
    private key: KeywordService,
    private patt: PatternService,
    private fb: FormBuilder,
    private tem: TemplateService,
    private rout: Router
  ) {}
  ngOnInit(): void {}

  fun(val:any) {
    console.log(val.value);

    if (val.value == 0) {
      
      this.defselected = 'None';
    }

    if (val.value == 1) {
      this.defselected = 'select the file type rule';
      this.filerule = true;
      this.keywordrule = false;
      this.patternrule = false;
      this.intial = false;
      this.file.getallfiletypepattern().subscribe({
        next: (data: any) => {
          this.filerulename = data;
          console.log(data);
        },
      });

      console.log('A');
    }
    if (val.value == 2) {
      this.filerule = false;
      this.keywordrule = true;
      this.patternrule = false;
      this.intial = false;
      this.defselected = 'Select the Key rule name';
      this.key.getkeytemplate().subscribe({
        next: (data: any) => {
          this.keywordrulename = data;
        },
      });
      console.log('B');
    }
    if (val.value == 3) {
      this.filerule = false;
      this.keywordrule = false;
      this.patternrule = true;
      this.intial = false;
      this.defselected = 'select the pattern rule name';
      this.patt.getpattern().subscribe({
        next: (data: any) => {
          this.patternrulename = data;
        },
      });
      console.log('C');
    }
  }

  fileIdarray: any = [];
  patternIdarray: any = [];
  keywordIDarray: any = [];

  fileIdarray1: any = [];
  patternIdarray2: any = [];
  keywordIDarray3: any =[];
  

  formdata: FormGroup = this.fb.group({
    name: '',
    description: '',
    patternrules: [],
    keywordrules: [],
    filetyperules: [],
  });

 
 getpatt(pid:any){
  console.log(pid.value);
  this.onpatt=true
  console.log(pid.value);
  this.patt.getpatterntemplateByid(pid.value).subscribe({
    next:(res:any)=>{
      console.log(res['name']);
  
    //  this.patternIdarray.map((pid:any) =>{
    //    let exitst=this.patternIdarray.find((x:any)=>x.pt_id==pid)
     
    //    if (exitst) {
    //     console.log("exits");
        
    //    }
    //    else{
    //     console.log("success");
        
    //    }
    //  })
    
      this.patternIdarray.push(
        {
          pt_id:pid.value,
          pt_name:this.option[3]
        },
      )
      this.patternIdarray2.push(
        {
          pname:this.option[3],
          pt_id:pid.value,
          pt_name: res['name']
        },
      )
     
      this.formdata.get('patternrules')?.setValue(this.patternIdarray);
  
      
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
  console.log(this.patternIdarray);
  for (let i = 0; i < this.patternIdarray2.length; i++) {
 console.log(this.patternIdarray2[i].pt_id);
 
    
  }
 
  
   }
   getkey(kid:any){
  
  this.onkey=true
  console.log(kid.value);
    this.key.getkeytemplateByid(kid.value).subscribe({
      next:(res:any)=>{
        console.log(res['name']);
    
      
        this.keywordIDarray.push(
          {
            kt_id:kid.value,
            kt_name:this.option[2]
          },
        )
        this.keywordIDarray3.push(
          {
            kname:this.option[2],
            kt_id:kid.value,
            kt_name: res['name']
          },
        )
        this.formdata.get('keywordrules')?.setValue(this.keywordIDarray);

       
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
   
  
  console.log(this.keywordIDarray);
 
  
  
  
   }
  
  
   getfile(fid:any){
  console.log(fid.value);
  this.onfile=true
  console.log(fid.value);
  this.file.getfiletypebyid(fid.value).subscribe({
    next:(res:any)=>{
      console.log(res['name']);
  
     
      this.fileIdarray.push(
        {
          ft_id:fid.value,
          ft_name:this.option[1]
        },
      )
      this.fileIdarray1.push(
        {
          fname:this.option[1],
          ft_id:fid.value,
          ft_name: res['name']
        },
      )
     
  
  
      
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
  console.log(this.fileIdarray);
  this.formdata.get('filetyperules')?.setValue(this.fileIdarray);
  
  
   }
   deletekey(data:any){
    this.keywordIDarray3.splice(data,1)
    this.keywordIDarray.splice(data,1)
  
   }

    deletepatt(data:any){
    this.patternIdarray.splice(data,1)
    this.patternIdarray2.splice(data,1)
   }
    deletefile(data:any){
      this.fileIdarray.splice(data,1)
      this.fileIdarray1.splice(data,1)
    
     }
   

  addtemplate(data: any) {
    this.tem.savetemplate(data).subscribe({
      next: (res) => {
        console.log(res);
        Swal.fire({
          title: 'Template Saved Successfully !!',

          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });

        this.rout.navigate(['/admin/tem']);
      },
    });

    console.log(data);
  }
}
