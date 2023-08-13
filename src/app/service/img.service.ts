import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http:HttpClient) { }

  public saveimg(data:any){
    return this.http.post(`${baseUrl}/img/`,data)
  }
/**
 * getallimg
 */
public getallimg() {
return  this.http.get(`${baseUrl}/img/get`)
  
}

}
