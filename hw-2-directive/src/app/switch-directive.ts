import { Directive, Input } from '@angular/core';
import { Case } from './case-directive';
import { Default } from './default-directive';

@Directive({
  selector: '[appSwitch]',
  providers: [Case, Default]
})
export class Switch {
  private _value: any;
  cases: Case[] = [];
  defaultCase: Default | null = null;

  @Input() set appSwitch(value: any) {
    this._value = value;
    this.updateCases();
  }

  private updateCases() {
    let matched = false;

    for (const c of this.cases) {
      if (c.value === this._value) {
        c.show();
        matched = true;
      } else {
        c.hide();
      }
    }

    if (this.defaultCase) {
      if (matched) this.defaultCase.hide();
      else this.defaultCase.show();
    }
  }

  registerCase(c: Case) {
    this.cases.push(c);
    this.updateCases();
  }

  registerDefault(d: Default) {
    this.defaultCase = d;
    this.updateCases();
  }
}
