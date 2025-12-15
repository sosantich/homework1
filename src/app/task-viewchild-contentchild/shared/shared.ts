import { Component, ContentChild, ElementRef, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.html',
})
export class Shared implements AfterContentInit, AfterViewInit {

  @ViewChild('layoutContainer') containerRef!: ElementRef;
  @ViewChild('header') headerRef!: ElementRef;
  @ViewChild('footer') footerRef!: ElementRef;

  @ContentChild('rightBlock') sharedHalfElement!: ElementRef; 

  ngAfterViewInit() {
    const headerEl = this.headerRef.nativeElement;
    const footerEl = this.footerRef.nativeElement;
    const containerEl = this.containerRef.nativeElement;
    
    containerEl.style.width = '350px';
    containerEl.style.margin = '10px';

    headerEl.style.backgroundColor = 'red'; 
    headerEl.style.color = 'white';
    headerEl.style.padding = '10px';
    headerEl.style.textAlign = 'center';
    headerEl.style.fontWeight = 'bold';
    
    footerEl.style.backgroundColor = 'green'; 
    footerEl.style.color = 'white';
    footerEl.style.padding = '10px';
    footerEl.style.textAlign = 'center';
    footerEl.style.fontWeight = 'bold';
  }

  ngAfterContentInit() {
      const nativeEl = this.sharedHalfElement.nativeElement;
      
      nativeEl.style.display = 'flex';
      nativeEl.style.alignItems = 'center';
      nativeEl.style.justifyContent = 'center';
      nativeEl.style.width = '200px';
      nativeEl.style.backgroundColor = 'purple';
      nativeEl.textContent = "Shared Content";
  }
}