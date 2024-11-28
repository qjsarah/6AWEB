import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.css'
})
export class ReferenceComponent {
  info = {
    badgelinks: [
      'CompTIA IT Fundamentals+ (ITF+) Certification',
      'Cyber Threat Management',
      'Cybersecurity Essentials',
      'CCNA: Introduction to Networks'
    ]
  }
}
