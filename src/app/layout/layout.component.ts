import { Component } from '@angular/core';
<<<<<<< HEAD
import { Island } from '../../data/islands';
import islands from '../../data/islands';
=======

import islands, { Island } from '../../data/islands';
>>>>>>> upstream/solution-output
import { HeaderComponent } from '../header/header.component';
import { IslandFormComponent } from '../island-form/island-form.component';
import { IslandListComponent } from '../island-list/island-list.component';

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
<<<<<<< HEAD
  selectedIsland = islands[0];
=======
  currentIsland = islands[0];

  selectIsland(island: Island) {
    this.currentIsland = island;
  }
>>>>>>> upstream/solution-output

  filterIslands(search: string) {
    if (!search) {
      this.filteredIslands = this.islands;
      return;
    }

    this.filteredIslands = this.islands.filter((island) =>
      island.name.toLowerCase().includes(search.toLowerCase())
    );
    }

    changeIslandForm(newIsland: Island){
      this.selectedIsland = newIsland;
  }
}
