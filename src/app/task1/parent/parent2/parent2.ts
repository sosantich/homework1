import { Component } from '@angular/core';
import { Child2 } from '../../child/child2/child2';

@Component({
  selector: 'app-parent2',
  imports: [Child2],
  template: `
    <p>Parent2</p>
    <input placeholder="Введите текст" (input)="parentText = $event.target.value">
    <p>Результат родителя: {{result}}</p>
    <app-child2
      [childText]="parentText"
      (childTextChange)="result = $event">
    </app-child2>
  `,
})
export class Parent2 {
  parentText = '';
  result = '';
}
