import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  readonly APIUrl = 'http://localhost:5038/posts/';
  constructor(private http:HttpClient, public router: Router){
  }
  posts: any=[];

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

     this.http.post(this.APIUrl+'addPost', formData).subscribe(
      data=>{
        alert(data);
        this.router.navigate(['/posts']);
      }
     )
  }
  cancel() {
    this.router.navigate(['/posts']); 
  }
}
