import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonAccountVerifyService } from '../services/common-account-verify.service';
import { ToasterService } from '../services/toaster.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private signinService: CommonAccountVerifyService,  
    private fb: FormBuilder,
    private router: Router,
    private toasterService:ToasterService
    ) { }

  ngOnInit() {
    let login = this.signinService.checkLoggedIn();
    if(login){
      this.router.navigate(['/dashboard'])  
    }
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]     
    });
  }

  onSubmit(){
    if (this.signinForm.valid) {
      this.signinService.SignInUser(this.signinForm.value).subscribe(res=>{
        if(res.status==200){      
          this.router.navigate(['/dashboard'])
        }else{
          this.toasterService.showError(res.message)
        }
      
      })
    }
  }

}
