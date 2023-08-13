import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmingaurdGuard implements CanActivate {

constructor(private _login:LoginService,private rout:Router){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

if (this._login.isLogin() && this._login.getUserRole()=='ADMIN') {
  return true;
  
}
this.rout.navigate(['/'])
return false;
  }
  
}
