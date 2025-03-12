import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  refreshPosts(){
    this.http.get(this.APIUrl+'GetPosts').subscribe(data=>{this.posts=data;})
  }
  ngOnInit(){
    this.refreshPosts();
  }

  deletePost(id:string){
    this.http.delete(this.APIUrl+'DeletePost?_id='+id).subscribe(
      data=>{
        alert(data);
        this.refreshPosts()
      }
    )
  }
}
