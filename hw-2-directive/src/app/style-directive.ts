import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class Style {
  constructor(private el: ElementRef) {}
  @Input() set appStyle(styles: { [key: string]: string } | null) {
    if (!styles) return;
    for (const key in styles) {
      this.el.nativeElement.style[key] = styles[key];
    }
  }
}
