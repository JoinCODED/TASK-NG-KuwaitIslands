import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Island } from '../../data/islands';

@Component({
  selector: 'app-island-card',
  standalone: true,
  imports: [],
  templateUrl: './island-card.component.html',
  styleUrl: './island-card.component.css',
})
export class IslandCardComponent {
  @Input() island!: Island;
  @Output() clicked = new EventEmitter<number>();
  @Output() showIslandClicked = new EventEmitter<Island>();

  clicks = 0;

  onClick() {
    this.clicks++;
    this.clicked.emit(this.island.id);
    this.showIslandClicked.emit(this.island);
  }
}
