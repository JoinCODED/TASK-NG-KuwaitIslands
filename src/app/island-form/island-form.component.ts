import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

import { Island } from '../../data/islands';

@Component({
  selector: 'app-island-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './island-form.component.html',
  styleUrl: './island-form.component.css',
})
export class IslandFormComponent {
  @Input() island!: Island;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, isValidPhone, Validators.minLength(8)]],
    });
  }

  bookTrip() {

    console.log('Form Data:', this.form.value);
    if(confirm("Confirm booking "+this.island.name+" for "+this.form.controls['name'].value+" with phone number "+this.form.controls['phone'].value)){
      this.form.controls['name'].setValue('');
      this.form.controls['phone'].setValue('');
    }
  }

}

export function isValidPhone(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  const isNumber = /^[0-9]*$/.test(value); 

  const valid = isNumber; 
  return valid ? null : { isValidPhone: true }; 
}
