import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class Class {
  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) {}
  @Input() set appClass(classes: string | string[]) {
    if (!classes) return;
    if (typeof classes === 'string') {
      this.renderer.addClass(this.el.nativeElement, classes);
    } else {
      classes.forEach(c => this.renderer.addClass(this.el.nativeElement, c));
    }
  }
}
