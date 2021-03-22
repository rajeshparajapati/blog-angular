import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonAccountVerifyService {
  baseUrl = environment.baseUrl;
  isUserLoggedIn = false; 
  constructor(
    private httpClient: HttpClient,
    
  ) {
    
  }

  /** comment
   * signup user form
   */
   signUpUser(formData: any): any {
    return this.httpClient.post<any>(`${this.baseUrl}/api/signup`, formData).
      pipe(map(user => {
        if (user && user.token) {
          this.isUserLoggedIn = true;
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('usertoken', user.token);        
        }
        return user;
      }));
  }

  /** comment
   *  get token
   */
  getToken() {
    return localStorage.getItem('usertoken');
  }

 

  /** comment
   * sign in user
   */
  SignInUser(formData: any): any {
    return this.httpClient.post<any>(`${this.baseUrl}/api/login`, formData).
      pipe(map(user => {
        if (user && user.token) {
          this.isUserLoggedIn = true;
          localStorage.setItem('isUserLoggedIn', 'true');
          localStorage.setItem('usertoken', user.token);        
        }
        return user;
      }));
  }

  
  /** comment
   * check login service
   */
  checkLoggedIn() {
    let status = false;   
    if (localStorage.getItem('isUserLoggedIn') === 'true') {
      const token = localStorage.getItem('usertoken');

      if (token) {
        status = true;

      } else {
        status = false;
      }
    } else { 
      localStorage.removeItem('usertoken');
      localStorage.removeItem('isUserLoggedIn');
      this.isUserLoggedIn = false;
      status = false;
    }   
    return status;
  }

 
  /** comment
   * logout user
   */
  logout() {    
    localStorage.removeItem('usertoken');
    localStorage.removeItem('isUserLoggedIn');   
    this.isUserLoggedIn = false;
  }
}