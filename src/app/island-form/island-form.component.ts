import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Island } from '../../data/islands';
import { from } from 'rxjs';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

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
      name: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
    });
  }

  bookTrip() {
    if (this.form.valid) {
      this.island.visitors!.push({
        name: this.form.controls['name'].value,
        phone: this.form.controls['phone'].value,
      });
      console.log(this.island.visitors);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Confirm booking ${this.island.name} for ${this.form.controls['name'].value} with phone number ${this.form.controls['phone'].value}`,
        showConfirmButton: false,
        timer: 2700,
      });
      // window.confirm(
      //   `Confirm booking ${this.island.name} for ${this.form.controls['name'].value} with phone number ${this.form.controls['phone'].value}`
      // );
    }
  }
}
