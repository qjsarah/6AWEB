import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  readonly APIUrl = 'http://localhost:5038/posts/';
  editingPost: any = null;
  posts: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, public router: Router
  ) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchPost(id);
    }
  }

  fetchPost(id: string) {
    this.http.get(this.APIUrl + 'GetPost/' + id).pipe(
      tap((post) => this.editingPost = post)
    ).subscribe({
      error: (error) => console.error('Error fetching post:', error)
    });
  }
  

  editPost(fileInput: HTMLInputElement) {
    if (!this.editingPost) return;

    const formData = new FormData();
    formData.append('id', this.editingPost._id);
    formData.append('title', this.editingPost.title);
    formData.append('content', this.editingPost.content);

    if (fileInput.files && fileInput.files.length > 0) {
      formData.append('image', fileInput.files[0]);
    }

    this.http.put(this.APIUrl + 'Editpost/' + this.editingPost._id, formData).subscribe({
      next: () => {
        alert('Post updated successfully!');
        this.router.navigate(['/posts']);
      },
      error: (error) => {
        console.error('Error updating post:', error);
      }
    });
  }
}
