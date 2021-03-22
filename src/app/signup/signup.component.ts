import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonAccountVerifyService } from '../services/common-account-verify.service';
import { ToasterService } from '../services/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor( private signinService: CommonAccountVerifyService,  
    private fb: FormBuilder,
    private router: Router,
    private toasterService:ToasterService) { }

  ngOnInit() {
    let login = this.signinService.checkLoggedIn();
    if(login){
      this.router.navigate(['/dashboard'])  
    }
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]     
    });
  }

    onSubmit(){
    if (this.signUpForm.valid) {
      this.signinService.signUpUser(this.signUpForm.value).subscribe(res=>{
        if(res.status==200){      
          this.router.navigate(['/dashboard'])
        }else{
          this.toasterService.showError(res.message)
        }
      
      })
    }
  }

}
