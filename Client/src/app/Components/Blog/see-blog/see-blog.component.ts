import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Models/Blog';
import { BlogService } from '../../../Services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-blog',
  templateUrl: './see-blog.component.html',
  styleUrls: ['./see-blog.component.css']
})
export class SeeBlogComponent implements OnInit {

  //attributes
  id: string;
  blog: Blog;

  loading = false;

  constructor(private BlogService: BlogService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadBlog();
  }

  loadBlog(){
    this.loading = true;
    this.BlogService.getBlogId(this.id).subscribe(data =>{
      this.loading = false;
      this.blog = data;
    });
  }

}
