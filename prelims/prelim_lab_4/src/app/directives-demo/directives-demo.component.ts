import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {
  isHighlighted = true
  isLoggedIn = true
  condition = true
  fruits = ['Apple', 'Oranges', 'Grapes']
  color = 'red'
}
