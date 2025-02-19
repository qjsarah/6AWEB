import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  submitted = false;
  inputs: any[] = [
    { name: '', email: '', phone: '', message: '' }
  ];
  formdata: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',Validators.maxLength(12)),
    message: new FormControl('')
  });

  onClickSubmit(data: any) {
    this.inputs.push (data);
    this.submitted = true;
  }
}
