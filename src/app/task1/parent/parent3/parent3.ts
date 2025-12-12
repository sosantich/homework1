import { Component } from '@angular/core';
import { Child3 } from '../../child/child3/child3';

@Component({
  selector: 'app-parent3',
  imports: [Child3],
  template:`
  <p>Parent3</p>
  <app-child3 [(childText)]="parentText"></app-child3>
  <p>Родитель: {{parentText}}</p>
  `,
  styleUrl: './parent3.scss',
})
export class Parent3 {
  parentText = '';
}
