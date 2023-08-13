import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private _http:HttpClient) {


  }

  createkeyword(data:any){
    return this._http.post(`${baseUrl}/keytemplate`,data)
  }

  getkeytemplate(){
    return this._http.get(`${baseUrl}/getkey`)
  }
  deletekey(id:any){
    return this._http.delete(`${baseUrl}/keydelete/${id}`,{responseType:"text"})
    
  }
  updatekeyByid(data:any,id:any){
   return this._http.put(`${baseUrl}/updatekey/${id}`,data)
  }
  getkeytemplateByid(id:any){
   return this._http.get(`${baseUrl}/getbytem/${id}`)
  }
}
