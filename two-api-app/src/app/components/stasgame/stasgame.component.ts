import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { StasGameService } from '../../services/stasgame.service';

@Component({
  selector: 'app-stasgame',
  imports: [CommonModule, MatButton],
  providers: [StasGameService],
  templateUrl: './stasgame.component.html',
  styleUrl: './stasgame.component.scss',
})
export class StasGameComponent {
  public log: { id: number; text: string }[] = [];
  private i = 0;
  public compTurn = false;
  private finished = false;

  constructor(
    private router: Router,
    private game: StasGameService,
  ) {}

  add(text: string) {
    this.log.push({ id: ++this.i, text });
  }

  play(x: number) {
    const result = this.game.userPlay(x);
    result.log.forEach((l) => this.add(l));
    this.compTurn = result.compTurn;
    this.finished = result.finished;
  }

  answer(a: 'less' | 'more' | 'eq') {
    const result = this.game.compAnswer(a);
    this.compTurn = result.compTurn;
    this.finished = result.finished;
  }

  reset() {
    this.game.reset();
    this.log = [];
    this.i = 0;
    this.compTurn = false;
    this.finished = false;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
