import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedInUser = false;
  filter:FormGroup;
  allTags: any;
  allPost: any;
  constructor(private fb:FormBuilder,private postService:PostService) { }
 
  ngOnInit() {
    this.isLoggedInUser = !! localStorage.getItem('usertoken');
    this.filter = this.fb.group({
      tags: ['']      
    })
    this.getTags();
    this.getAllPost();
  }

  getTags(){
    this.postService.getTags().subscribe(res=>{
      this.allTags = res.data     
    })
  }

  getAllPost(){
    this.postService.getAllPost(this.filter.value).subscribe(res=>{
      this.allPost = res.data;
    })
  }

  tagFilter(){
    this.getAllPost();
  }

  

}
