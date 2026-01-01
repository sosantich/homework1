import { Component, signal } from '@angular/core';
import { If } from "./if-directive";
import { For } from './for-directive';

@Component({
  selector: 'app-root',
  imports: [If, For],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public toggler: boolean = true;
  items = ['а', 'б', 'в'];

}
