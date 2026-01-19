import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Card1Httpclient } from './cards/card1-httpclient/card1-httpclient';
import { Card2Fetch } from './cards/card2-fetch/card2-fetch';
import { Card3Asyncpipe } from './cards/card3-asyncpipe/card3-asyncpipe';
import { FullObservable } from './cards/full-observable';

@Component({
  selector: 'app-root',
  imports: [Card1Httpclient, Card2Fetch, Card3Asyncpipe, FullObservable],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}