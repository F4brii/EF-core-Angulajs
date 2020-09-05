import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './Components/Blog/main/main.component';
import { MainPostComponent } from './Components/Post/main-post/main-post.component';
import { SeeBlogComponent } from './Components/Blog/see-blog/see-blog.component';
import { PostBlogComponent } from './Components/Blog/post-blog/post-blog.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'blogs', component: PostBlogComponent },
  { path: 'blogs/see/:id', component: SeeBlogComponent },
  { path: 'posts', component: MainPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
