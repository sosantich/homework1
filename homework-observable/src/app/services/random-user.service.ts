import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomUserResponse } from '../models/random-user.model';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>('https://randomuser.me/api/');
  }
}
