import { Component } from '@angular/core';
import { ChildLifecycle } from './child-lifecycle/child-lifecycle'; 
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildLifecycle, NgIf],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.scss'
})
export class Lifecycle { 
  public isTrue = true;
  public value = 0;
  public str = 'Str';
  public cont = 0;

  changeInput() {
    this.value = Math.random();
    console.log('---');
  }

  changeIsTrue() {
    this.isTrue = false;
    setTimeout(() => {
      this.isTrue = true;
    }, 1000);
    console.log('---');
  }

  changeCont() {
    this.cont = Math.random();
    console.log('---');
  }

  changeStr() {
    this.str = 'Str ' + Math.random();
    console.log('---');
  }
}