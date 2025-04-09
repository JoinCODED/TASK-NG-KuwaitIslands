import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() visitors = new EventEmitter();

  bookTrip(form: NgForm) {
    this.island.visitors++;
    this.visitors.emit(this.island.visitors);
    console.log(form.value);
  }
}
