import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  onSubmit(e: Event) {
    e.preventDefault();
    this.island.visitors++;
    this.visitors.emit(this.island.visitors);
  }
}
