import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TokenInterceptorService  } from '../app/interceptor/token-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,    
    SignupComponent,
    SigninComponent, 
    HomeComponent,  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressAnimation:'decreasing'
      
    }),
    AppRoutingModule
  ],
  providers: [
    { 
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
