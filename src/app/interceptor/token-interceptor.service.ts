import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { CommonAccountVerifyService } from '../services/common-account-verify.service';
import { tap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector:Injector,private router: Router) { }

  intercept(req, next) {
    let authService = this.injector.get(CommonAccountVerifyService)
   
    let tokenizedReq = req.clone({
      setHeaders:{
        authorization : `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq).pipe(tap(()=>{},(err:any)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status !==401){
          return;
        } else{
          this.router.navigate(['login']);
        }
      }
    }
    ))
  }

}
