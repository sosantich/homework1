import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RandomUserResponse } from '../../models/random-user.model';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-card3-asyncpipe',
  imports: [CommonModule],
  templateUrl: './card3-asyncpipe.html',
  styleUrls: ['./card3-asyncpipe.scss'],
})
export class Card3Asyncpipe {

  public response: Observable<RandomUserResponse>;

  constructor(private randomUserService: RandomUserService) {
    this.response = this.randomUserService.getRandomUser();
  }
}
