import { Component } from '@angular/core';
import { FirstComponent } from './first-component/first-component';
import { SecondComponent } from './second-component/second-component';
import { ThirdComponent } from './third-component/third-component';

@Component({
  selector: 'app-parent',
  imports: [FirstComponent, SecondComponent, ThirdComponent],
  templateUrl: './parent.html',
})
export class Parent {

}