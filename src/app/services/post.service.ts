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
   * @method : POST /createpost
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
   * @description : single Post
   * @method : GET /get_single_post
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
   * @method : DELETE /deletepost
   */

    deletePost(id:any){    
      return this.http.delete<any>(this.baseUrl+`/api/post/deletepost/${id}`);
    } 

    /**
   * @description : Post Tags 
   * @method : GET /get_all_tags
   */

    getTags(){    
      return this.http.get<any>(this.baseUrl+`/f/api/post/get_all_tags`);
    } 

      /**
   * @description : Get All Posts
   * @method : POST /get_all_posts
   */

   getAllPost(formdata:any){    
      return this.http.post<any>(this.baseUrl+`/f/api/post/get_all_posts`,formdata);
    } 



}
