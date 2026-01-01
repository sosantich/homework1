import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class For {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input() set appFor(collection: any[] | null) {
    this.viewContainer.clear();
    if (!collection || collection.length === 0) return;
    for (let i = 0; i < collection.length; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: collection[i], index: i});
    }
  }
}
