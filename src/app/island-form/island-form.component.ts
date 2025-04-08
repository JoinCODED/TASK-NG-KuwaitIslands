import { Component, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Island } from '../../data/islands';

@Component({
  selector: 'app-island-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './island-form.component.html',
  styleUrl: './island-form.component.css',
})
export class IslandFormComponent {
  @Input() island!: Island;

  fullName = '';
  phoneNumber = '';
  confirmationMessage = '';
  showConfirmation = false;

  bookTrip(form: NgForm) {
    if (this.fullName && this.phoneNumber) {
      this.confirmationMessage = `Confirm booking ${this.island.name} for ${this.fullName} with phone number ${this.phoneNumber}`;
      this.showConfirmation = true;
    }
  }

  confirmBooking(form: NgForm) {
    this.island.visitors++;
    this.confirmationMessage = '';
    this.showConfirmation = false;
    form.resetForm();
  }

  cancelBooking() {
    this.confirmationMessage = '';
    this.showConfirmation = false;
  }
}
