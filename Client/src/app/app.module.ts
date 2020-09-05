import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//module for client
import { HttpClientModule } from '@angular/common/http';

//module for reactive forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/Blog/main/main.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainPostComponent } from './Components/Post/main-post/main-post.component';
import { SeeBlogComponent } from './Components/Blog/see-blog/see-blog.component';
import { PostBlogComponent } from './Components/Blog/post-blog/post-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    MainPostComponent,
    SeeBlogComponent,
    PostBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
