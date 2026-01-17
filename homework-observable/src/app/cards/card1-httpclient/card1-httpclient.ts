import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card1-httpclient',
  templateUrl: './card1-httpclient.html',
  imports: [],
  styleUrls: ['./card1-httpclient.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Card1Httpclient implements OnInit, OnDestroy {
  character: any = {};
  private subscription: Subscription | null = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
}


ngOnInit() {
  this.subscription = this.http.get('https://rickandmortyapi.com/api/character/1').subscribe({ 
    next: (response) => {
        this.character = response;
        this.cdr.detectChanges();
      },
    });
}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
