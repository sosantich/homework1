import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child-lifecycle.html'
})
export class ChildLifecycle implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked { 
  @Input() data: number = 0;
  
  constructor() {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('2. ngOnChanges');
  }

  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked');
  }
}