import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FullObservableService {

  private i = 0;

  createCounter(): Observable<number> {
    return new Observable<number>((observer) => {
      const id = setInterval(() => {

        if (this.i === 10) {
          observer.complete();
          clearInterval(id);
          return;
        }

        if (this.i > 10) {
          observer.error(new Error('Произошла ошибка'));
          clearInterval(id);
          return;
        }

        this.i++;
        observer.next(this.i);

      }, 1000);
    });
  }

  triggerError(): void {
    this.i = 11;
  }
}
