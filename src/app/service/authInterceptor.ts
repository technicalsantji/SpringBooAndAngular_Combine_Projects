import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{


    constructor(private _login:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       let authreq=req
        const token=this._login.getToken()
        console.log("inter is fine ");
        console.log(token);
        

if(token!=null)
{

    
    authreq=authreq.clone({setHeaders:{Authorization:`${token}`}});
}
return next.handle(authreq);

    }
}

export const authIntercetorProvider=[
   {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
   }
]
   