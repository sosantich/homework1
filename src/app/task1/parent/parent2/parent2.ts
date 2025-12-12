import { Component } from '@angular/core';
import { Child2 } from '../../child/child2/child2';

@Component({
  selector: 'app-parent2',
  imports: [Child2],
  template: `
  <p>Parent2</p>
  <app-child2 [childText]="parentText" (childTextChange)="parentText=$event"></app-child2>  
  <p>Результат родителя: {{parentText}}</p>
  `,
  styleUrl: './parent2.scss',
})
export class Parent2 {
  parentText = '';
}
