import { Component } from '@angular/core';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  info = {
    act: 'Here are the recent activities and stories of our feral silly cats.',
    images: 
      'https://external-preview.redd.it/Nf7m3e2pn5YwQF5VDwbU2PmoFwrQ4ad9cZNqZ7UPHfE.png?auto=webp&s=715c3787b37ac54e5d7b9435bfaf7cfb3902b8b6'
    ,
    imageCaption:
      'This is ben. Ben is a menace of an orange cat. He has all the energy and restlessness of a wild rabbit. If someone were to help tidy up the fur on his head and chest that has been messed up by running around everywhere, Ben would certainly be most greateful.'
  }
}
