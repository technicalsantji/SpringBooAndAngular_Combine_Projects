import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FiletypeService {

  constructor(private http:HttpClient) { }
  getallfiletype(){
   return this.http.get(`${baseUrl}/getallfile`)
  }
  savefiletype(data:any){

    return this.http.post(`${baseUrl}/save-filetype`,data)
  }
  getallfiletypepattern(){
    return this.http.get(`${baseUrl}/getallfiletypes`)
  }
  getfiletypebyid(id:any){
    return this.http.get(`${baseUrl}/filestype/${id}`)
  }
  deletefiletype(id:any){
    return this.http.delete(`${baseUrl}/delete-filetype/${id}`,{responseType:'text'})
  }
  updatefiletype(updatedata:any,id:any){
    return this.http.put(`${baseUrl}/update-filetypes/${id}`,updatedata)
  }
}
