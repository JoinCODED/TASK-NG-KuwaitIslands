import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

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
  @Output() formSubmit = new EventEmitter<Visitor>();
  form: FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      name: [''],
      phone: ['']
    })
  }

  bookTrip(){
    let visitor = new Visitor(this.form.value.name, this.form.value.phone)
    console.log(this.form.value);
    this.formSubmit.emit(visitor);
  }

}
