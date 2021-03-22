import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { CommonAccountVerifyService } from '../services/common-account-verify.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authservice: CommonAccountVerifyService
    ) { }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const url: string = state.url;
      return  this.verifyLogin(url);
      }

  /** comment
   * verify user login
   */
      verifyLogin(url): boolean {
        if (!this.isLoggedIn()) {
            this.authservice.logout();         
            this.router.navigate(['/signin']);
            return false;
        } else if (this.isLoggedIn()) {
            return true;
        }
    }
    public isLoggedIn(): boolean {
      let status = false;
      if ( this.authservice.checkLoggedIn()) {
          status = true;
      } else {
          status = false;
      }
      return status;
    }
}