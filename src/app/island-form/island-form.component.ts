import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Island } from '../../data/islands';

@Component({
  selector: 'app-island-form',
  standalone: true,
  imports: [],
  templateUrl: './island-form.component.html',
  styleUrl: './island-form.component.css',
})
export class IslandFormComponent {
  @Input() island!: Island;

  bookTrip(form: NgForm) {
    console.log(form.value);
  }
}
