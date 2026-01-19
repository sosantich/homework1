import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  getRandomDog(): Observable<Dog> {
    return new Observable<Dog>(observer => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
          observer.next(data);
        })
    });
  }
}
