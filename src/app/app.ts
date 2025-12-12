import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
  <button routerLink="/task11">Минимальная логика</button>
  <button routerLink="/task12">Валидация</button>
  <button routerLink="/task13">Двусторонняя привязка</button>
  <button routerLink="/task2">ViewChield/ContentChield</button>
  <button routerLink="/task3">Life Cycle</button>
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.scss'
})
export class App {
  
}
