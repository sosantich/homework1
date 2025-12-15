import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child3',
  imports: [FormsModule],
  template: `
    <p>Child3</p>
    <input [(ngModel)]="childText">
  `,
  styleUrl: './child3.scss',
})
export class Child3 {
  @Input() childText = '';
  @Output() childTextChange = new EventEmitter<string>();
}
