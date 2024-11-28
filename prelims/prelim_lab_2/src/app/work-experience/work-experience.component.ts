import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  info = {
    work: [
      'Freelance Illustrator (2021-2023)',
      'Graphic Designer of Raya Mini Grocery (2022-2023)'
    ]
  }
}
