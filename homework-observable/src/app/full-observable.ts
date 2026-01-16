import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-full-observable',
  template: ``,
})
export class FullObservable implements OnInit, OnDestroy {

  private value = 0;
  private subscription: any;

  ngOnInit() {
    const observable = new Observable<number>((observer) => {
      let i = 0;
      const id = setInterval(() => {

        if (i === 5) {
          observer.complete();
          clearInterval(id);
          return;
        }

        if (i === 6) {
          observer.error(new Error('Произошла ошибка'));
          clearInterval(id);
          return;
        }
        i++;
        observer.next(i);
      }, 1000);

      return () => {
        clearInterval(id);
      };
    });

    this.subscription = observable.subscribe({
      next: (v) => {
        console.log(v);
        this.value = v;
      },
      error: (err) => {
        console.error(err.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
