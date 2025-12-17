import { Component } from '@angular/core';
import { Child3 } from '../../child/child3/child3';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent3',
  imports: [Child3, FormsModule],
  template: `
    <p>Parent3</p>
    <input [(ngModel)]="parentText" placeholder="Введите текст">
    <br><br>
    <input [(ngModel)]="parentText">
    <app-child3 [(childText)]="parentText"></app-child3>
  `,
  styleUrl: './parent3.scss',
})
export class Parent3 {
  parentText = '';
}
