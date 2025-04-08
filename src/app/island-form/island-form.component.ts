import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
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
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      number: ['', Validators.required],
    });
  }
  @Input() island!: Island;

  // form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   number: new FormControl('',Validators.required),
  // });

  bookTrip() {
    console.log(this.form.value);
    const visitor: Visitor = {
      name: this.form.value.username,
      number: this.form.value.number,
    };
    this.island.visitors.push(visitor);

    const confirmation = confirm(
      `Are you sure you want to book a trip to ${this.island.name} for ${visitor.name}?`
    );
    if (confirmation) {
      alert(
        `Trip to ${this.island.name} for ${visitor.name} has been booked successfully!`
      );
    } else {
      alert('Trip booking has been canceled.');
    }
    this.form.reset();
  }
}
