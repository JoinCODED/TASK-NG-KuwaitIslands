import { Component, EventEmitter, Output } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { Island } from '../data/islands';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'TASK-NG-KuwaitIslands';
  @Output() currentIsland = new EventEmitter<Island>()

  
}
