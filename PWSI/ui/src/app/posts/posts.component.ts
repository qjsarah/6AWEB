import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  readonly APIUrl = 'http://localhost:5038/posts/';
  editingPost: any=null;  

  constructor(private http:HttpClient){}

  posts: any=[];

  refreshPosts() {
    const storedToken = localStorage.getItem('access-token');
  
    if (!storedToken) {
      console.error('No access token found, redirecting to login.');
      window.location.href = 'http://localhost:4200/';
      return;
    }
  
    const token = JSON.parse(storedToken).token; // Ensure correct format
  
    console.log("Stored Token:", token); // ✅ Debug log
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  
    this.http.get(this.APIUrl + 'GetPosts', httpOptions).subscribe(
      data => { this.posts = data; },
      error => {
        console.error("Failed to fetch posts:", error);
        if (error.status === 401 || error.status === 403) {
          console.log("Redirecting due to unauthorized access.");
          window.location.href = 'http://localhost:4200/';
        }
      }
    );
  }
  

  ngOnInit(){
    this.refreshPosts();
  }

  deletePost(id: string) {
    const accessToken = localStorage.getItem('access-token');
  
    if (!accessToken) {
      console.error('No access token found, redirecting to login.');
      window.location.href = 'http://localhost:4200/';
      return;
    }
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': JSON.parse(accessToken).token
      })
    };
  
    this.http.delete(this.APIUrl + 'DeletePost?_id=' + id, httpOptions).subscribe(
      data => {
        alert("Deleted successfully!");
        this.refreshPosts();
      },
      (error: HttpErrorResponse) => {
        console.error("Failed to delete post:", error);
        if (error.status === 401 || error.status === 403) {
          window.location.href = 'http://localhost:4200/'; // Redirect unauthorized users
        }
      }
    );
  }
  
}
