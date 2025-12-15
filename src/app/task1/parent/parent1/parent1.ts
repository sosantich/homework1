import { Component } from '@angular/core';
import { Child1 } from '../../child/child1/child1';

@Component({
  selector: 'app-parent1',
  imports: [Child1],
  template: `
    <p>Parent1</p>
    <input placeholder="Введите текст" (input)="parentText = $event.target.value">
    <p>Результат родителя: {{result}}</p>
    <app-child1
      [childText]="parentText"
      (childTextChange)="result = $event">
    </app-child1>
  `,
})
export class Parent1 {
  parentText = '';
  result = '';
}
