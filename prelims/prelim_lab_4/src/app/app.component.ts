import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingDemoComponent, DirectivesDemoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim-lab-act4';
}
