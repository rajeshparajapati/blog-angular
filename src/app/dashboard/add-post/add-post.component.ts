import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { ToasterService } from '../../services/toaster.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post:FormGroup;
  constructor(private fb:FormBuilder,private postService:PostService,private toasterService: ToasterService) { }

  ngOnInit() {
    this.post = this.fb.group({
      title: ['', Validators.required],
      subtitle:['',Validators.required],
      tags :['',Validators.required], 
      content :['',Validators.required],    
    })
  }
  onSubmit(){
    if(this.post.valid){
      this.postService.addPost(this.post.value).subscribe(res=>{
        if(res.status==200){
          this.toasterService.showSuccess(res.message);
          this.post.reset();
        }else{
          this.toasterService.showError(res.message)
        }
      })

    }
  }

}
