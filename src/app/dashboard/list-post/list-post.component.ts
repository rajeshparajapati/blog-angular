import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ToasterService } from '../../services/toaster.service'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts:any
  constructor(private postService: PostService,private toasterService: ToasterService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(res=>{
      this.posts = res.data;
    })
  }
  deletePost(id:any){
    this.postService.deletePost(id).subscribe(res=>{
      if(res.status==200){
        this.toasterService.showSuccess(res.message)
        this.getPosts();
      }else{
        this.toasterService.showError(res.message)
      }
    })

  }

}
