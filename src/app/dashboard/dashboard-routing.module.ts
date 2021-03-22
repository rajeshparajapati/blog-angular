import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { DashboardComponent } from './dashboard.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  { path:'',component:DashboardComponent,children:[
    { path:'list-post',component:ListPostComponent },
    { path:'add-post',component:AddPostComponent },
    { path:'edit-post/:id',component:EditPostComponent},
    { path:'view-post/:id',component:ViewPostComponent}
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
