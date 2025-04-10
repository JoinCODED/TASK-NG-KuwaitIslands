import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

import { Island } from '../../data/islands';

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

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.pattern('[0-9]{8}'), Validators.required]]
    })
  }

  bookTrip(){//form: NgForm) {
    console.log(this.form.value);
    if(confirm(`Confirm booking ${this.island.name} for 
      ${this.form.get('fullName')?.value} with phone number ${this.form.get('phoneNumber')?.value}`))
      this.form.reset();
  }
}
