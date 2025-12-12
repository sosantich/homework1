import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { App } from '../../../app';

@Component({
  selector: 'app-child2',
  imports: [],
  template:`
    <p>Child2</p>
    <input #inputRef placeholder="Введите текст">
    <button (click)="validate()">Отправить</button>
  `,
  styleUrl: './child2.scss',
})
export class Child2 {
  @Input() childText = '';
  @Output() childTextChange = new EventEmitter<string>();

  @ViewChild('inputRef')
  inputRef!: ElementRef;

  banWord = ['егор', 'туз', 'юла'];
  validate(){
    const text = this.inputRef.nativeElement.value;

    if (text.length > 7){
      alert('Слишком длинное слово (не должно превышать 7)');
      return;
    }

    for (let word of this.banWord){
      if (text.includes(word)){
        alert(`Вы используете запрещенные слова, а именно: ${word}`);
        return;
      }
    }

    if (/[a-zA-Z]/.test(text)){
      alert('Английский язык запрещен');
      return;
    }

    this.childTextChange.emit(text);
  }
}
