import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  info = {
    content: 'Spreading positivity through silly little pictures of cats.',
    aboutme: "The purpose of this project is to showcase a collection of cats being silly. Cats truly are mystical and fascinating animals. Us 'Hoomans' have been obsessing over them for more than 6,500 years and guess what, we still are! This website will allow everyone to easily look for various funny and creative images of cats.",
    act: 'Here are the recent activities and stories of our feral silly cats.', }
}
