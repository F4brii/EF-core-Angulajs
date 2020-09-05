import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../Models/Blog';
import { BlogService } from '../../../Services/blog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //Variable of object
  Blogs: Blog[];
  loading = false;

  constructor(private BlogService: BlogService) { }

  //Method of start
  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs() {
    this.loading = true;
    this.BlogService.getBlog().subscribe(data => {
      this.loading = false;
      this.Blogs = data;
    });
  }

  deleteBlog(id: string){
    this.loading = true;
    this.BlogService.deleteBlog(id).subscribe(data => {
      this.loadBlogs();
      this.loading = false;
    });
  }

}
