import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Island, Visitor } from '../../data/islands';

@Component({
  selector: 'app-island-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './island-form.component.html',
  styleUrl: './island-form.component.css',
})
export class IslandFormComponent {
  @Input() island!: Island;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, isValidPhone, Validators.minLength(8)]],
    });
  }

  bookTrip() {
    const name = this.form.controls['name'].value;
    const phone = this.form.controls['phone'].value;

    console.log('Form Data:', this.form.value);

    if (
      confirm(
        `Confirm booking ${this.island.name} for ${name} with phone number ${phone}`
      )
    ) {
      this.island.visitors.push({ name, phone });
      console.log(this.island.visitors);
      this.form.reset();
    }
  }
}

// Custom phone number validator
export function isValidPhone(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  const isNumber = /^[0-9]*$/.test(value);
  return isNumber ? null : { isValidPhone: true };
}
