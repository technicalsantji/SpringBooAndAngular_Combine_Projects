import { MainuserService } from './../../service/mainuser.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  education:string[]=["metric", "Intermediate","graduation","post-graduation"];
  formsgroup:FormGroup;
  constructor(private _fb:FormBuilder,private _diabox:DialogRef,private _user:MainuserService){
    this.formsgroup=this._fb.group({
     
      firstname:"",
      lastname:"",
      phone:"",
      dob:"",
      email:"",
      gender:"",
      password:"",
      username:""
      
    })
  }
  subproduct(){
     
      this._user.usersave(this.formsgroup.value).subscribe(
       (res)=>{
        Swal.fire("Registration Successfully !! !", "User has Registered Success and Your username :"+res.username+" and Name ", "success");
        this._diabox.close();
console.log(res);



       },
       (err)=>{
        Swal.fire({
          title: 'Username already exits ! ',
          icon:'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

       }
      )
  }
  closedialogbox(){
    this._diabox.close();
  }

  urlimgicon="../assets/img/img1.png";
}
