import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user:any=null;

  constructor(private login:LoginService){

  }
  ngOnInit(): void {
    this.user=this.login.getUser()
  }
  imgurl="../assets/img/img3.jpg"
}
