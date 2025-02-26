import { Component, signal } from '@angular/core';
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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule, MatButtonToggleModule, MatSlideToggleModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  name='';
  email='';
  arrivalDate!: Date;
  departDate!: Date;
  birthDate!: Date;
  password='';
  guest=5;
  guestmin=1; guestmax=20;
  listingType='';
  minPrice=10;
  maxPrice=1000;
  submitted=false;
  

  formdata: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    birthDate: new FormControl(null, [Validators.required]),
    arrivalDate: new FormControl(null, [Validators.required]),
    departDate: new FormControl(null, [Validators.required]),
    minPrice: new FormControl(10),
    maxPrice: new FormControl(1000),
    listingType: new FormControl('', [Validators.required]),
    guest: new FormControl(1)
  })
  onClickSubmit(data: {
    name: string;
    email: string;
    password: string;
    arrivalDate: Date;
    departDate: Date;
    birthDate: Date;
    minPrice: number;
    maxPrice: number;
    listingType: string;
    guest: number;
  }){
    this.submitted = true;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.arrivalDate = data.arrivalDate;
    this.departDate = data.departDate
    this.minPrice = data.minPrice;
    this.maxPrice = data.maxPrice;
    this.listingType = data.listingType;
    this.guest = data.guest;
    this.birthDate = data.birthDate;
    if (this.formdata.valid) {
      console.log('Form Submitted!', this.formdata.value);
    } else {
      prompt('Form is not valid!');
    }
  }
  hidelistingTypeIndicator = signal(false);
  toggleSingleSelectionIndicator() {
    this.hidelistingTypeIndicator.update(value => !value);
  }
}
