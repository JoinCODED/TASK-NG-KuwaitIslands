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
  @Output() islandSelected=new EventEmitter<Island>()

  visitors =0;
  handleClick(){
    this.visitors +=1
    this.islandSelected.emit(this.island)
  }
}
