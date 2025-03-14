import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css'
})
export class ViewPostComponent {
  readonly APIUrl = 'http://localhost:5038/posts/getPost/';
  post: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    console.log('Extracted postId:', postId); // Debugging log
  
    if (!postId) {
      console.error('postId is undefined! Check your routing.');
      return;
    }
    this.http.get(this.APIUrl + postId).subscribe(
      data => {
        console.log('Post Data:', data);
        this.post = data;
      },
      error => console.error('Error fetching post:', error)
    );
}}
