import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FileoperationService {

  constructor(private http:HttpClient) { }
  upload(file: File,id:any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('filename', file);

    formData.append('tid',id)
    const req = new HttpRequest('POST', `${baseUrl}/fileuploads`, formData, {
      
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
