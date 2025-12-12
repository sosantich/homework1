import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { App } from '../../../app';

@Component({
  selector: 'app-child1',
  imports: [],
  template:`
  <p>Child</p>
  <input #inputRef [value]="childText" placeholder="Введите текст">
  <button (click)="changeTextToUpperCase()">В верхний регистр</button>
  <button (click)="changeTextToLowerCase()">В нижний регистр</button>
  `,
  styleUrl: './child1.scss',
})
export class Child1 {
  @Input() childText ='';
  @Output() childTextChange = new EventEmitter<string>();

  @ViewChild('inputRef') 
  inputRef !: ElementRef;

changeTextToUpperCase() {
  let text = this.inputRef.nativeElement.value;
  text = text.replace(/^Огромный /i, '').replace(/^Маленький /i, '');
  this.childTextChange.emit('Огромный ' + text.toUpperCase());
}

changeTextToLowerCase() {
  let text = this.inputRef.nativeElement.value;
  text = text.replace(/^Огромный /i, '').replace(/^Маленький /i, '');
  this.childTextChange.emit('Маленький ' + text.toLowerCase());
}

}
