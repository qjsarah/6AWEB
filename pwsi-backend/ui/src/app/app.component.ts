import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
  readonly APIUrl = 'http://localhost:5038/posts/';

  constructor(private http:HttpClient){
  }

  posts: any=[];

  refreshPosts(){
    this.http.get(this.APIUrl+'GetPosts').subscribe(data=>{this.posts=data;})
  }
  ngOnInit(){
    this.refreshPosts();
  }

  addPost(){
    var newPost = (<HTMLInputElement>document.getElementById('newPost')).value;
    var newPostContent = (<HTMLInputElement>document.getElementById('newPostContent')).value;
    const fileInput = <HTMLInputElement>document.getElementById('newFeaturedImage');
    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Please select an image.");
      return;
    }
    var newFeaturedImage = fileInput.files[0];

    var formData=new FormData();
    formData.append('title', newPost);
    formData.append('image', newFeaturedImage);
    formData.append('content', newPostContent);
     this.http.post(this.APIUrl+'AddPost', formData).subscribe(
      data=>{
        alert(data);
        this.refreshPosts()
      }
     )
  }

  deletePost(id:any){
    this.http.delete(this.APIUrl+'DeletePost?id='+id).subscribe(
      data=>{
        alert(data);
        this.refreshPosts()
      }
    )
  }
}
