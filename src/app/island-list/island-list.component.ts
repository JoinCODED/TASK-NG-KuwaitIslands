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
  @Output() selectedIsland = new EventEmitter<Island>();
  @Input() islands!: Island[];

  onIslandClick(island: Island) {
    this.selectedIsland.emit(island);
  }
}
