import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FileopService {

  constructor(private http:HttpClient) { }
  getallfileop(){
   return this.http.get(`${baseUrl}/getfileop`)
  }
}
