import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child3',
  template: `
    <p>Child3</p>
    <button (click)="changeTextToUpperCase()">В верхний регистр</button>
    <button (click)="changeTextToLowerCase()">В нижний регистр</button>
  `,
})
export class Child3 {
  @Input() childText = '';
  @Output() childTextChange = new EventEmitter<string>();

  changeTextToUpperCase() {
    let text = this.childText.replace(/^Огромный /i, '').replace(/^Маленький /i, '');
    this.childTextChange.emit('Огромный ' + text.toUpperCase());
  }

  changeTextToLowerCase() {
    let text = this.childText.replace(/^Огромный /i, '').replace(/^Маленький /i, '');
    this.childTextChange.emit('Маленький ' + text.toLowerCase());
  }
}