import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// we import it model
import { Blog } from '../Models/Blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  Url = 'http://localhost:8080/';
  Service = 'api/blog/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.Url + this.Service);
  }

  getBlogId(id: string): Observable<Blog> {
    return this.http.get<Blog>(this.Url + this.Service + id);
  }

  postBlog(Blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.Url + this.Service, Blog, this.httpOptions);
  }

  deleteBlog(id: string): Observable<Blog> {
    return this.http.delete<Blog>(this.Url + this.Service + id);
  }
}
