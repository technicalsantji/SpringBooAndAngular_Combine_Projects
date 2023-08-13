import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MainuserService {

  constructor(private _http:HttpClient) { }


  public usersave(data:any):Observable<any>{
    return this._http.post(`${baseUrl}/user/`,data)
  }
  // public getuserbyemailandusername(data:any):Observable<any>{
  //   return this._http.post(`${baseUrl}/login/datalogs`,data)
  // }
}
