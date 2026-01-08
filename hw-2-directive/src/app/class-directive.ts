import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class Class {
  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) {}
  @Input() set appClass(classes: string | string[] | { [k: string]: boolean }) {
    if (!classes) return;
    if (typeof classes === 'string') { 
      this.renderer.addClass(this.el.nativeElement, classes); 
      return; 
    }
    if (Array.isArray(classes)) { 
      classes.forEach(c => this.renderer.addClass(this.el.nativeElement, c)); 
      return; 
    }
    Object.keys(classes).forEach(k => classes[k] 
      ? this.renderer.addClass(this.el.nativeElement, k) 
      : this.renderer.removeClass(this.el.nativeElement, k));
  }
}
