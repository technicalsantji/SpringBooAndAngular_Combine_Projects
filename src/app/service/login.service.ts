import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject();

  constructor(private http:HttpClient) {


   }

   public getCurrentUser(){
    return this.http.get(`${baseUrl}/current`);
   }

   public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
   }



  //  login user code
  public loginUser(tokens:any){
    // localStorage.setItem("token",tokens)
    sessionStorage.setItem("token",tokens)
    return true;

  }
  // islogin: user is logged in or not
  public isLogin(){
    // let tokenset=localStorage.getItem("token")
    let tokenset1=sessionStorage.getItem("token")
    if(tokenset1==undefined || tokenset1=='' || tokenset1==null){

      return false;
    }else{
      return true;
    }
  }

  public getToken(){
  //  return localStorage.getItem("token");
   return sessionStorage.getItem("token");
  }


  public logout(){
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    
    return true;
  }

  public setUser(user:any){
    // localStorage.setItem("user",JSON.stringify(user))
    sessionStorage.setItem("user",JSON.stringify(user))
  }
  public getUser(){
    // let userstr=localStorage.getItem("user");
    let userstr=sessionStorage.getItem("user");
    if(userstr!=null){
      return JSON.parse(userstr);
    }
    else{
      this.logout();
      
      return null;
    }
  }

  public getUserRole(){
    let user=this.getUser()
    return user.authorities[0].authority;
  }

}
