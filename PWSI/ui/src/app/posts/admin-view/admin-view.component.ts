import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {
readonly APIUrl = 'http://localhost:5038/posts/';
  editingPost: any=null;  

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  

  posts: any=[];

  ngOnInit(){
    const postId = this.route.snapshot.paramMap.get('id');
    this.http.get(this.APIUrl + 'getPost/' + postId).subscribe(
      data => {
        this.posts = data;
      },
      error => console.error('Error fetching post:', error)
    );
  }

  deletePost(id:string){
    this.http.delete(this.APIUrl+'DeletePost?_id='+id).subscribe(
      data=>{
        alert(data);
      }
    )
  }
}
