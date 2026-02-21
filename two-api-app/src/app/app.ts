import { Component, signal } from '@angular/core';
import { RouterOutlet,  } from '@angular/router';
import { ItemsTableComponent } from './components/items-table/items-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemsTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
