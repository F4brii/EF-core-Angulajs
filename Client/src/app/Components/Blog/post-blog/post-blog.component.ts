import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Blog } from 'src/app/Models/Blog';
import { BlogService } from '../../../Services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

  Blog: FormGroup;

  constructor(private fb: FormBuilder, private BlogService: BlogService, private route: Router) {
    this.Blog = this.fb.group({
      blogId: ['', Validators.required],
      url: ['']
    });
  }

  ngOnInit(): void {
  }

  saveBlog(){
    const blog: Blog = {
      blogId: this.Blog.get('blogId').value,
      url: this.Blog.get('url').value
    };
    this.BlogService.postBlog(blog).subscribe(data => {
      this.route.navigate(['']);
    });
  }

}
