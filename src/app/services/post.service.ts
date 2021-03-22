import { Injectable } from '@angular/core';
import {environment  } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl= environment.baseUrl
  constructor(private http:HttpClient) { }

  /**
   * @description : add post 
   * @method : POST /add_
   */

  addPost(post:any){    
    return this.http.post<any>(this.baseUrl+'/api/post/createpost',post);
  }

   /**
   * @description :get posts
   * @method : GET /getpost
   */

  getPosts(){    
    return this.http.get<any>(this.baseUrl+`/api/post/getpost`);
  }

   /**
   * @description : single product
   * @method : GET /single_product
   */

  getSinglePost(id:any){    
    return this.http.get<any>(this.baseUrl+`/api/post/get_single_post/${id}`);
  }



  /**
   * @description : Update Post
   * @method : PUT /updatepost
   */

  updatePost(id:any,post:any){    
    return this.http.put<any>(this.baseUrl+`/api/post/updatepost/${id}`,post);
  } 

   /**
   * @description : Delete Post 
   * @method : PUT /update_product
   */

    deletePost(id:any){    
      return this.http.delete<any>(this.baseUrl+`/api/post/deletepost/${id}`);
    } 

}
