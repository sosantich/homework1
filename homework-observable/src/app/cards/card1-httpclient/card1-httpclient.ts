import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-card1-httpclient',
  templateUrl: './card1-httpclient.html',
  styleUrls: ['./card1-httpclient.scss'],
})
export class Card1Httpclient implements OnInit, OnDestroy {

  public character?: Character;
  private subscription?: Subscription | null = null;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.subscription = this.characterService.getCharacter(1).subscribe(character => {
        this.character = character;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
