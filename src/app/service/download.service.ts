import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http:HttpClient ) {}


  downloads(id:any){
   return this.http.get(`${baseUrl}/files/${id}`,{observe:'response',responseType:'blob'})
   
  }
}
