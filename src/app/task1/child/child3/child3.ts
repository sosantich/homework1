import { Component, EventEmitter, NgModule, Input, Output } from '@angular/core';
import { App } from '../../../app';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child3',
  imports: [FormsModule],
  template:`
  <p>Child3</p>
  <input [(ngModel)]="childText" (ngModelChange)="childTextChange.emit($event)">
  `,
  styleUrl: './child3.scss',
})
export class Child3 {
  @Input() childText = '';
  @Output() childTextChange = new EventEmitter<string>();
}
