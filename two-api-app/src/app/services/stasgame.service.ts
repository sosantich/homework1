export class StasGameService {
  private compSecret = this.randomNumber();
  private l = 1;
  private r = 100;
  private compGuess = 0;
  private finished = false;
  private compTurn = false;

  private generateCompGuess() {
    return Math.floor(Math.random() * (this.r - this.l + 1)) + this.l;
  }

  private randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  public reset() {
    this.compSecret = this.randomNumber();
    this.l = 1;
    this.r = 100;
    this.compGuess = 0;
    this.finished = false;
    this.compTurn = false;
  }

  public userPlay(x: number): { log: string[]; compTurn: boolean; finished: boolean } {
    const log: string[] = [];
    if (!x || this.finished || this.compTurn)
      return { log, compTurn: this.compTurn, finished: this.finished };

    if (x === this.compSecret) {
      if (x === 78) {
        log.push('Любимое число Германа');
      } else {
        log.push(`Ты угадал ${x}`);
      }

      this.finished = true;
      return { log, compTurn: this.compTurn, finished: this.finished };
    }

    if (x > this.compSecret) log.push(`${x} → меньше`);
    else log.push(`${x} → больше`);

    this.compGuess = this.generateCompGuess();
    log.push(`Комп говорит ${this.compGuess}`);
    this.compTurn = true;

    return { log, compTurn: this.compTurn, finished: this.finished };
  }

  public compAnswer(answer: 'less' | 'more' | 'eq'): { compTurn: boolean; finished: boolean } {
    if (this.finished || !this.compTurn)
      return { compTurn: this.compTurn, finished: this.finished };

    if (answer === 'eq') {
      this.finished = true;
      return { compTurn: this.compTurn, finished: this.finished };
    }

    if (answer === 'less') this.r = this.compGuess - 1;
    if (answer === 'more') this.l = this.compGuess + 1;

    this.compTurn = false;
    return { compTurn: this.compTurn, finished: this.finished };
  }
}
