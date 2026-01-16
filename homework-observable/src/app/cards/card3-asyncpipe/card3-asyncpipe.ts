import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card3-asyncpipe',
  imports: [CommonModule],
  templateUrl: './card3-asyncpipe.html',
  styleUrls: ['./card3-asyncpipe.scss'],
})
export class Card3Asyncpipe {

  response: Observable<any>;

  constructor(private http: HttpClient) {
    this.response = this.http.get('https://randomuser.me/api/');
  }
}
