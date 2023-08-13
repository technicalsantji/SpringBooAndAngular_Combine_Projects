import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http:HttpClient) { }

savetemplate(data:any){
    return this.http.post(`${baseUrl}/addtem`,data)

  }

getalltemplate(){
  return this.http.get(`${baseUrl}/getalltem`)
}
gettemById(id:any){
  return this.http.get(`${baseUrl}/gettemplate/${id}`)
}
deletetemplate(id:any){
  return this.http.delete(`${baseUrl}/deletetem/${id}`,{responseType:"text"})
}
updatetemplate(data:any,id:any){
  return this.http.put(`${baseUrl}/updatetemplate/${id}`,data)
}

}
