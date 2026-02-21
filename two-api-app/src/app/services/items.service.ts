import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Item, CharactersResponse, DummyQuotesResponse } from '../interfaces/item.interface';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  constructor(private http: HttpClient) {}

  public loadItems(): Observable<Item[]> {
    const chars$ = this.http.get<CharactersResponse>('https://rickandmortyapi.com/api/character');

    const quotes$ = this.http.get<DummyQuotesResponse>('https://dummyjson.com/quotes?limit=20');

    return forkJoin([chars$, quotes$]).pipe(
      map(([c, q]) =>
        c.results.map((x, i) => ({
          id: x.id,
          image: x.image,
          name: x.name,
          species: x.species,
          status: x.status,
          gender: x.gender,
          origin: x.origin.name,
          quote: q.quotes[i]?.quote ?? '',
          author: q.quotes[i]?.author ?? '',
        })),
      ),
    );
  }
}
