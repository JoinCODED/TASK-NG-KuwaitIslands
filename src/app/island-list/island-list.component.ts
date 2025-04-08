import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Island } from '../../data/islands';
import { IslandCardComponent } from '../island-card/island-card.component';

@Component({
  selector: 'app-island-list',
  standalone: true,
  imports: [IslandCardComponent],
  templateUrl: './island-list.component.html',
  styleUrl: './island-list.component.css',
})
export class IslandListComponent {
  @Input() islands!: Island[];
<<<<<<< HEAD
  @Output() setIsland = new EventEmitter<Island>();

  selectCard(island: Island){
    this.setIsland.emit(island);
=======
  @Output() selected = new EventEmitter<Island>();

  selectIsland(island: Island) {
    this.selected.emit(island);
>>>>>>> upstream/solution-output
  }
}
