import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-certification',
  standalone: true,
  imports: [],
  templateUrl: './skills-certification.component.html',
  styleUrl: './skills-certification.component.css'
})
export class SkillsCertificationComponent {
  info = {
    badge: [
      'CompTIA IT Fundamentals+ (ITF+) Certification',
      'Cyber Threat Management',
      'Cybersecurity Essentials',
      'CCNA: Introduction to Networks'
    ],
    badgeimages: [
      'https://images.credly.com/size/220x220/images/5e719e46-faf2-40c9-ad49-3b11e6e6cb34/image.png',
      'https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/badges/badge-images/cyber_threat_management_37.png'
    ]
  }
}
