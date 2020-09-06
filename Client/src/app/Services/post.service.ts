import { Injectable } from '@angular/core';
//we import modules
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Post } from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  Url = 'http://localhost:8080/';
  Service = 'api/post/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.Url + this.Service);
  }

  deletePost(id: string): Observable<Post>{
    return this.http.delete<Post>(this.Url + this.Service+id);
  }

  createPost(Post: Post): Observable<Post>{
    return this.http.post<Post>(this.Url + this.Service, Post, this.httpOptions);
  }
}
