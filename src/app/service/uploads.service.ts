import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  
textextract(file: File) {
  const formData: FormData = new FormData();

  formData.append('file', file);
     return this.http.post(`${baseUrl}/text`,formData)
}

  getFiles(): Observable<any> {
    return this.http.get(`${baseUrl}/files`);
  }
}
