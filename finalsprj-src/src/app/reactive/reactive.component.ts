import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  title='app-reactive';
  submitted = false;
  inputs: any[] = [
    { name: '', email: '', phone: '', message: '' }
  ];
  formdata: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl()
  });

  onClickSubmit(data: any) {
    this.inputs.push (data);
    this.submitted = true;
    this.formdata.reset;
  }
}
