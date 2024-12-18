import { Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { UserComponent } from './admin/user/user.component';
import { PostComponent } from './admin/post/post.component';

export const routes: Routes = [
    {path : '', component : HomeComponent},
    {path : 'user', component : UserComponent},
    {path : 'post', component : PostComponent}
];
