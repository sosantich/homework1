import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Shared } from '../shared/shared';

@Component({
  selector: 'app-third-component',
  imports: [Shared],
  templateUrl: './third-component.html',
})
export class ThirdComponent implements AfterViewInit {
  @ViewChild('centerContainer') containerElement!: ElementRef; 
  @ViewChild('leftBlock') leftBlockElement!: ElementRef; 

  ngAfterViewInit() {
    if (this.containerElement && this.leftBlockElement) {
      
      const containerEl = this.containerElement.nativeElement;
      containerEl.style.display = 'flex';
      containerEl.style.height = '100px'; 
      containerEl.style.border = '2px solid black'; 

      const leftEl = this.leftBlockElement.nativeElement;
      leftEl.style.backgroundColor = 'red';
      leftEl.style.color = 'white';
      leftEl.style.padding = '10px';
      leftEl.style.display = 'flex';
      leftEl.style.justifyContent = 'center';
      leftEl.style.alignItems = 'center';
      leftEl.style.fontWeight = 'bold';
      leftEl.style.borderRight = '2px solid black';
    }
  }
}