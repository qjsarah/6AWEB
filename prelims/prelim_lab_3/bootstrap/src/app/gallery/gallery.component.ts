import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  info = {
    content: 'Browse our collection of silly ferals.',
  };
  row1images: String[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKftWrM07KsI01ZixsgBmKqJmIfQtwrkONcg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYPS9xk3SB4TqUiIwBuhUmgKM4JKl8RZ9XQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnK3wZ2Sw1plPyiPHqzMDK40Z3vk7pLWaew&s',
];
  row2images: String[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLu-83T-BJnwgywQYnI22omcvHia4sgX9nO1psI9O1X0vxQEgtPWVJ_gne9WXK4_P0iWQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_LKF6V4kdwU6K0MUhotmszLP2BwFdDIwJQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRi4SBKlI5_yatb7IZHUwKQ7WbYiSssepc2Q&s'

];
}
