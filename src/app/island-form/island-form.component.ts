import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Island } from '../../data/islands';
import { FormErrorComponent } from '../shared/form-error/form-error.component';

@Component({
  selector: 'app-island-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormErrorComponent],
  templateUrl: './island-form.component.html',
  styleUrl: './island-form.component.css',
})
export class IslandFormComponent {
  @Input() island!: Island;

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  bookTrip() {
    if (!this.bookingForm.valid) {
      console.error('Form is not valid');
      return alert('Form is not valid');
    }

    if (this.bookingForm.valid) {
      const { name, phone } = this.bookingForm.value;
      console.log({ name, phone });
      if (name === '') {
        console.error('name is required');
        return alert('name is required');
      }
      if (phone === '') {
        console.error('phone is required');
        return alert('phone is required');
      }
      const confirmed = confirm(
        `Confirm booking ${this.island.name} for ${name} with phone number ${phone}`
      );
      if (confirmed) {
        this.island.visitors.push({ name, phone });
        this.bookingForm.reset();
        console.log(
          `Booking confirmed! ${this.island.name} now has ${this.island.visitors} visitors.`
        );
      } else {
        console.log('Booking canceled.');
      }
    }
  }
}
