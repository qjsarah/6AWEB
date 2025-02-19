import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ValidationComponent } from './validation/validation.component';

export const routes: Routes = [
    {path : 'reactive', component : ReactiveComponent},
    {path : 'template', component : TemplateDrivenComponent},
    {path : 'validation', component : ValidationComponent}
];
