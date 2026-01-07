import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { Switch } from './switch-directive';

@Directive({
  selector: '[appCase]'
})
export class Case implements OnInit {
  @Input('appCase') appCase: any;

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private switchParent: Switch
  ) {}

  ngOnInit() {
    this.switchParent.registerCase(this);
  }

  show() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.template);
  }

  hide() {
    this.viewContainer.clear();
  }

  get value() {
    return this.appCase;
  }
}
