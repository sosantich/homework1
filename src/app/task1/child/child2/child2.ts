import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p>Child2</p>
    <button (click)="validate()">Проверить</button>
  `,
})
export class Child2 {
  @Input() childText = '';
  @Output() childTextChange = new EventEmitter<string>();

  bannedWords = ['егор', 'туз', 'юла'];

  validate() {
    this.childTextChange.emit('');

    const text = this.childText;

    if (!text) {
      alert('Пустой текст!');
      return;
    }

    if (text.length > 7) {
      alert('Слишком длинное слово (не должно превышать 7 символов)');
      return;
    }

    for (let word of this.bannedWords) {
      if (text.toLowerCase().includes(word)) {
        alert(`Запрещенное слово: ${word}`);
        return;
      }
    }

    if (/[a-zA-Z]/.test(text)) {
      alert('Английский язык запрещён');
      return;
    }

    this.childTextChange.emit(text);
  }
}
