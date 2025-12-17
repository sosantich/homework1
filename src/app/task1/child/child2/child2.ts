import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-child2',
  imports: [NgIf],
  template: `
  <br>
    <p>Child2</p>
    <p *ngIf="error" style="color: red;">{{error}}</p>
  `,
})
export class Child2 {
  private _childText = '';

  @Input() 
  set childText(value: string) {
    this._childText = value;
    this.validate();
  }

  get childText(): string {
    return this._childText;
  }

  @Output() childTextChange = new EventEmitter<string>();

  private _bannedWords = ['егор', 'туз', 'юла'];
  public error = '';

  validate() {
    this.error = '';
    this.childTextChange.emit('');

    const text = this.childText.trim();

    if (!text) {
      this.setError('Пустой текст!');
      return;
    }

    if (text.length > 12) {
      this.setError('Слишком длинное слово (не должно превышать 12 символов)');
      return;
    }

    for (let word of this._bannedWords) {
      if (text.toLowerCase().includes(word)) {
        this.setError(`Запрещенное слово: ${word}`);
        return;
      }
    }

    if (/[a-zA-Z]/.test(text)) {
      this.setError('Английский язык запрещён');
      return;
    }

    this.childTextChange.emit(text);
  }

  private setError(message: string) {
    this.error = message;
  }
}