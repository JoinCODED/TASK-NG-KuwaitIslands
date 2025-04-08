import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Island } from '../../data/islands';
import { IslandCardComponent } from '../island-card/island-card.component';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-island-list',
  standalone: true,
  imports: [IslandCardComponent],
  templateUrl: './island-list.component.html',
  styleUrl: './island-list.component.css',
})
export class IslandListComponent {
  @Input() islands!: Island[];

@Output() islandForm = new EventEmitter<Island>()
  updateForm(island : Island){
    console.log("called updateForm", island)
    this.islandForm.emit(island)
  }




}
