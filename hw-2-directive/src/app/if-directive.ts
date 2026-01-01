import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class If {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input() set appIf(toggler: boolean) {
    this.viewContainer.clear();
    if (toggler) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
