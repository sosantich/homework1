import { Component } from '@angular/core';
import { Child1 } from '../../child/child1/child1';

@Component({
  selector: 'app-parent1',
  imports: [Child1],
  template: `
  <p>Parent</p>
  <app-child1 [childText]="parentText" (childTextChange)="parentText = $event"></app-child1>
  <p>Результат родителя: {{parentText}}</p>
  `,
  styleUrl: './parent1.scss',
})
export class Parent1 {
  parentText = '';
}
