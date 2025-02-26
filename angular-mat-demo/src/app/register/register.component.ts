import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';





@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 userName='';
 email='';
 password='';
 gender='';
 birthDate!: Date;
 address='';
 angularSkillLevel=5;
 submitted=false;
 minSkillLevel=1;
 maxSkillLevel=10;
 
 formdata: FormGroup = new FormGroup({
  userName: new FormControl(''),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  gender: new FormControl('', [Validators.required]),
  birthDate: new FormControl(null, [Validators.required]),
  address: new FormControl(''),
  angularSkillLevel: new FormControl(5)
 });
 onClickSubmit(data: {
  userName: string;
  email: string;
  password: string;
  gender: string;
  address: string;
  birthDate: Date;
  angularSkillLevel: number;
 }){ //return
  this.submitted = true;
  this.userName = data.userName;
  this.email = data.email;
  this.password = data.password;
  this.gender = data.gender;
  this.address = data.address;
  this.angularSkillLevel = data.angularSkillLevel;
  this.birthDate = data.birthDate;

  if (this.formdata.valid) {
    console.log('Form Submitted!', this.formdata.value);
  } else {
    prompt('Form is not valid!');
  }
 }
}
