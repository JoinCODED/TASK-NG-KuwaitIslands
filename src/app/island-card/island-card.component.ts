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
<<<<<<< HEAD

=======
  @Output() selected = new EventEmitter<Island>();

  selectIsland() {
    this.selected.emit(this.island);
  }
>>>>>>> upstream/solution-output
}
