import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { ToasterService } from '../../services/toaster.service'
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post:FormGroup;
  id:any;
  constructor(private fb:FormBuilder,private postService:PostService,private toasterService: ToasterService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    this.post = this.fb.group({
      title: ['', Validators.required],
      subtitle:['',Validators.required],
      tags :['',Validators.required], 
      content :['',Validators.required],    
    })
    this.getPost();
  }

  getPost(){
    this.postService.getSinglePost(this.id).subscribe(res=>{
      this.post.patchValue({title:res.data.title,subtitle:res.data.subtitle,tags:res.data.tags,content:res.data.content})
    })
  }
  onSubmit(){
    if(this.post.value){
      this.postService.updatePost(this.id,this.post.value).subscribe(res=>{
        if(res.status==200){
          this.toasterService.showSuccess(res.message);
        }else{
          this.toasterService.showError(res.message)
        }
      })
    }
  }

}
