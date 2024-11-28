import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  personalInfo = {
    name: "June Sarah Quiambao",
    contact: [
      'Phone: 09150990443',
      'Email: qjunesarah@gmail.com',
      'GitHub: github.com/qjsarah'
    ]
  }
}
