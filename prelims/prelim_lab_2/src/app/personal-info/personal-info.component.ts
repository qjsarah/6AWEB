import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  info = {
    name: 'June Sarah Quiambao',
    title: 'Web Developer',
    contact: [
      'Phone: 09150990443',
      'Email: qjunesarah@gmail.com',
      'GitHub: github.com/qjsarah'
    ],
    expertise: [
      'Front-end Design',
      'Web Content Creation',
      'Graphic Design',
      'Digital Illustration'
    ]
  }
}
