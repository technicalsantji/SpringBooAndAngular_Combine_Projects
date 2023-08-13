import { MainuserService } from './../../service/mainuser.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { Component ,Output,EventEmitter, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  education:string[]=["metric", "Intermediate","graduation","post-graduation"];
  
  formsgroup:FormGroup;

  constructor(private _fb:FormBuilder,private _diabox:DialogRef,private rout:Router,private _user:MainuserService,private _login:LoginService){
    this.formsgroup=this._fb.group({
      username:"",
      password:""
    })
  }
  
  ngOnInit() {
    

  }

// loginbtn(){
//   if(this.formsgroup.get('email')?.value=='' ||this.formsgroup.get('password')?.value=='') {
// alert("please Enetr the Email & password");
//   }
//   else if(this.formsgroup.get('email')?.value==this.email && this.formsgroup.get('password')?.value==this.password){
// this.rout.navigate(['/home'])

//   }else{
//     alert('not valid')

//   }


// }
      

  subproduct(val:any){
     
if(val.username=='' || val.username==null ){
  Swal.fire({
    title: 'Please fill blank username filed  !',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
return;
}else if(val.password=='' || val.password==null ){
  Swal.fire({
    title: 'Please fill blank password filed  ',
   
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
return;
}

// service calling here code

this._login.generateToken(val).subscribe({
  next:(data:any)=>{
console.log("success");
console.log(data);

this._login.loginUser(data.token);
console.log(this._login.isLogin());

this._login.getCurrentUser().subscribe({
  next:(user:any)=>{
                          this._login.setUser(user);
                          console.log(user);



                      if (this._login.getUserRole()=='ADMIN') {
                        
                        // admin Dashboard
                        // window.location.href='/admin'
                        this.rout.navigate(['admin'])
                        this._login.loginStatusSubject.next(true);
                        this._diabox.close();
                        setTimeout(()=>{

                          this._login.logout()
                          window.location.reload()
                        },600000)

                      }else if (this._login.getUserRole()=='NORMAL') {

                      // User dashboard

                      // window.location.href='/user'
                      this.rout.navigate(['user'])
                      this._login.loginStatusSubject.next(true);
                      this._diabox.close();
                      setTimeout(()=>{

                        this._login.logout()
                        window.location.reload()
                      },300000);

                      }
                      else{
                        this._login.logout();
                        
                      }

                      
                    },
  error:(er:any)=>{
    console.log(er);
    Swal.fire({
      title: 'Invalid Details ! try Again ',
      icon:'error',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    
  }
})



  },
  error:(err)=>{
    console.log("error");
    Swal.fire({
      title: 'Invalid Details ! please enter the correct  Username And Password',
      icon:'error',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
console.log(err);

  }
})
     
  }


  closedialogbox(){
    this._diabox.close();
  }

  urlimgicon="../assets/img/img1.png";
}
