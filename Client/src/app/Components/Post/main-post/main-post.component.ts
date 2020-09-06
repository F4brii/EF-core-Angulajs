import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/Post';

import { PostService } from '../../../Services/post.service'

@Component({
  selector: 'app-main-post',
  templateUrl: './main-post.component.html',
  styleUrls: ['./main-post.component.css']
})
export class MainPostComponent implements OnInit {

  loading = false;

  Posts: Post[];

  constructor(protected PostService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.PostService.getPosts().subscribe(data => {
      this.loading = false;
      this.Posts = data;
    });
  }

  deletePost(id: string){
    this.loading = true;
    this.PostService.deletePost(id).subscribe(data =>{
      this.loading = false;
      this.loadPosts();
    });
  }

}
