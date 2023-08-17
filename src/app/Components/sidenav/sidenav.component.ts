

import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  isloggedIn:boolean=false;
  user:any=null;
 
 
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router,private _dialog:MatDialog,public _login:LoginService) {}
  ngOnInit(): void {
    this.isloggedIn= this._login.isLogin();
    this.user=this._login.getUser();
    this._login.loginStatusSubject.asObservable().subscribe(data=>{
 
     this.isloggedIn= this._login.isLogin();
     this.user=this._login.getUser();
 
    })
 
   }
   
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width:800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res:any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e:any) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
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
  imgurl="../assets/img/img1.png"
  
}
