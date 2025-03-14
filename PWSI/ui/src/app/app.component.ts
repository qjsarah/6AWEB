import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { PostsComponent } from "./posts/posts.component";
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui';
}
