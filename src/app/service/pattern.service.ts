import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PatternService {
  constructor(private _http:HttpClient) {


  }

  createpattren(data:any){
    return this._http.post(`${baseUrl}/patternsave`,data)
  }

  getpattern(){
    return this._http.get(`${baseUrl}/getpattern`)
  }
  deletepattern(id:any){
    return this._http.delete(`${baseUrl}/patterndelete/${id}`,{responseType:"text"})
    
  }
  updatepatternByid(data:any,id:any){
   return this._http.put(`${baseUrl}/updatepattren/${id}`,data)
  }
  getpatterntemplateByid(id:any){
   return this._http.get(`${baseUrl}/getpaternbyid/${id}`)
  }
}
