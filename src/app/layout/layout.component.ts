import { Component, EventEmitter, Output } from '@angular/core';

import islands, { Island, Visitor } from '../../data/islands';
import { HeaderComponent } from '../header/header.component';
import { IslandFormComponent } from '../island-form/island-form.component';
import { IslandListComponent } from '../island-list/island-list.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, IslandListComponent, IslandFormComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  islands = islands;
  filteredIslands = islands;
  curIsland:Island = islands[0]

  cardWasClicked(island:Island){
    this.curIsland = island;
  }

  formSubmitted(event: Visitor) {    
    let visitor = new Visitor(event.name, event.phone);
    this.curIsland.visitors.push(visitor);
  }  

  filterIslands(search: string) {
    if (!search) {
      this.filteredIslands = this.islands;
      return;      
    }

    this.filteredIslands = this.islands.filter((island) =>
      island.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
