import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dog } from '../../models/dog.model';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-card2-fetch',
  imports: [CommonModule],
  templateUrl: './card2-fetch.html',
  styleUrls: ['./card2-fetch.scss'],
})
export class Card2Fetch implements OnInit, OnDestroy {

  public dog?: Dog;
  private subscription?: Subscription | null = null;

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.subscription = this.dogService.getRandomDog().subscribe(dog => {
        this.dog = dog;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
