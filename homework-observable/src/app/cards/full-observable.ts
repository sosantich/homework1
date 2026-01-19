import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FullObservableService } from '../services/full-observable.service';

@Component({
  selector: 'app-full-observable',
  templateUrl: './full-observable.html',
})
export class FullObservable implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;

  constructor(private fullObservableService: FullObservableService) {}

  ngOnInit(): void {
    this.subscription = this.fullObservableService.createCounter().subscribe({
        next: (val) => console.log(val),
        error: (err) => console.error(err.message),
        complete: () => console.log('complete'),
      });
  }

  triggerError(): void {
    this.fullObservableService.triggerError();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
