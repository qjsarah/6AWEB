import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
  readonly APIUrl = 'http://localhost:5038/posts/';
  editingPost: any=null;

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
  
  selectPostForEdit(post: any) {
    this.editingPost = { ...post }; // Cloning to avoid direct changes before saving
  }
  async editPost() {
    if (!this.editingPost) return;

    const updatedTitle = (<HTMLInputElement>document.getElementById('editTitle')).value;
    const updatedContent = (<HTMLInputElement>document.getElementById('editContent')).value;
    const fileInput = <HTMLInputElement>document.getElementById('editFeaturedImage');
    const formData = new FormData();
    formData.append('id', this.editingPost.id);
    formData.append('title', this.editingPost.title);
    formData.append('content', this.editingPost.content);
  
    if (fileInput.files && fileInput.files.length > 0) {
      formData.append('image', fileInput.files[0]); // Include new image if selected
    }
  
    try {
      const response = await this.http.put(this.APIUrl + 'Editpost', formData).toPromise();
      alert(response);
      this.refreshPosts();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  }
  cancelEdit() {
    this.editingPost = null;
  }
}
