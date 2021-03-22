import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  id: string;
  post: any;

  constructor(private postService:PostService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    this.getPost();
  }

  getPost(){
    this.postService.getSinglePost(this.id).subscribe(res=>{
      this.post = res.data
    })
  }

}
