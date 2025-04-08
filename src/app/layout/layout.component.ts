import { Component } from '@angular/core';

import islands, { Island } from '../../data/islands';
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
  currentIsland = this.islands[0];

  setCurrentIsland(island: Island) {
    this.currentIsland = island;
  }

  filterIslands(search: string) {
    console.log(search);
    if (!search) {
      this.filteredIslands = this.islands;
      return;
    }

    this.filteredIslands = this.islands.filter((island) =>
      island.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
