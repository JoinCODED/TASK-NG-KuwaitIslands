import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Island } from '../../data/islands';
import { from } from 'rxjs';

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

  constructor(private fb: FormBuilder)
  {
    this.form = fb.group({
      name : ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]*')]]
    })
  }

  bookTrip(form: FormGroup) {
    console.log(form.value);
    Swal.fire(
      {
        icon:'question',
        title: 'Confirm Booking?',
        text:`Confirm booking ${this.island.name} for ${form.get('name')?.value} with phone number ${form.get('number')?.value}`,
        confirmButtonText: 'Confirm',
        showCancelButton: true,
        cancelButtonText: 'Cancel',
        allowOutsideClick: false,
        showCloseButton: false
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire({
            icon:'success',
            title:'Booking Confirmed!'

          }).then(()=>{
            form.reset()
          })
        }
      })
  }
}
