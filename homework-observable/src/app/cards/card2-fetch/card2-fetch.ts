import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-card2-fetch',
  imports: [CommonModule],
  templateUrl: './card2-fetch.html',
  styleUrls: ['./card2-fetch.scss'],
})
export class Card2Fetch implements OnInit, OnDestroy {

  dog: any = {};
  private subscription!: Subscription;

  ngOnInit() {
    const observable = new Observable<any>((observer) => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          observer.next(data);
        })
    });

    this.subscription = observable.subscribe({
      next: (data) => {
        this.dog = data;
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
