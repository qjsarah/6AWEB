import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { PostsComponent } from "./posts/posts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
