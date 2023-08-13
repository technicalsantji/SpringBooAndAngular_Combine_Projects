import { Component,} from '@angular/core';
import {faGooglePlay,faApple} from '@fortawesome/free-brands-svg-icons';
import {faStar,faCircleDown,faArrowRight,faQuoteRight,faCircleCheck,faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup,FormControlName } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  fa=faGooglePlay
  app=faApple
  star=faStar
  dw=faCircleDown
  rq=faQuoteRight
  check=faCircleCheck
  gr=faCircleXmark
  phone=faPhone
  email=faEnvelope
  location=faLocationDot
  login=faArrowRight
  formgroups:FormGroup;
  constructor(private dia:MatDialog,private _fb:FormBuilder,private http:HttpClient){
   this.formgroups =this._fb.group({
      name:'',
      email:'',
      phone:'',
      message:''
    })
  }
  openmodelboxlogin(){
    this.dia.open(LoginComponent)
  }

  sendmail(data:any){

    console.log(data);
    
  }


}

