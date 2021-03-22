import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../app/guards/auth.guard';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'signin',component:SigninComponent},
  { path:'signup',component:SignupComponent},
  { path: 'dashboard', loadChildren: '../app/dashboard/dashboard.module#DashboardModule',canActivate:[AuthGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
