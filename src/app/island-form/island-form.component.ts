import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Island } from '../../data/islands';

@Component({
  selector: 'app-island-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './island-form.component.html',
  styleUrl: './island-form.component.css',
})
export class IslandFormComponent {
  @Input() island!: Island;

  bookTrip(form: NgForm) {
    // console.log('Booking info',form.value);
    // form.reset()
    if (form.valid) {
      const name = form.value.fullName;
      const phone = form.value.phoneNumber;
      const islandName = this.island.name;
  
      const confirmed = window.confirm(
        `Confirm booking ${islandName} for ${name} with phone number ${phone}?`
      );
  
      if (confirmed) {
        console.log("Booking confirmed!");
        // 👉 Here you can also send to a server, increase visitor count, etc.
        form.reset();
      } else {
        console.log("Booking canceled by user.");
      }
    } else {
      alert("Please fill out the form correctly.");
    }
  }
  }


