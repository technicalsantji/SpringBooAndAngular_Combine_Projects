import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
 
  isloggedIn:boolean=false;
  user:any=null;

  constructor(private _dialog:MatDialog,public _login:LoginService){

  }
  ngOnInit(): void {
   this.isloggedIn= this._login.isLogin();
   this.user=this._login.getUser();
   this._login.loginStatusSubject.asObservable().subscribe(data=>{

    this.isloggedIn= this._login.isLogin();
    this.user=this._login.getUser();

   })

  }
  
  openmodelboxsign(){
    this._dialog.open(RegisterComponent)
  }
  openmodelboxlogin(){
    this._dialog.open(LoginComponent)
  }
  openmodelboxlogout(){
   
    Swal.fire({
      
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer:10000
    })
    this._login.logout();
    window.location.reload()
  }
  imgurl="./assets/img/img1.jpg"
  urlimg="./assets/img/img1.png"

}
