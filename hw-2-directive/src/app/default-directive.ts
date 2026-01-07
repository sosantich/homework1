import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { Switch } from './switch-directive';

@Directive({
  selector: '[appDefault]'
})
export class Default implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private switchParent: Switch
  ) {}

  ngOnInit() {
    this.switchParent.registerDefault(this);
  }

  show() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.template);
  }

  hide() {
    this.viewContainer.clear();
  }
}
