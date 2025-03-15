import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewPostComponent } from './posts/view-post/view-post.component';
import { AdminViewComponent } from './posts/admin-view/admin-view.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'posts', component: PostsComponent},
    { path: 'add-post', component: AddPostComponent },
    { path: 'edit-post/:id', component: EditPostComponent },
    { path: 'login', component: LoginComponent },
    { path: 'posts/:id', component: ViewPostComponent },
    { path: 'admin-posts/:id', component: AdminViewComponent },
];
