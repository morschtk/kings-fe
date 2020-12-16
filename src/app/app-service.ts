import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, take } from 'rxjs/operators';

export interface ICard {
  url: string;
  number: number;
}

export interface IPlayer {
  name: string;
  index: number;
}

@Injectable()
export class AppService {
  isInGame: boolean;
  players$ = new BehaviorSubject<string[]>([]);
  currentCard$ = new BehaviorSubject<ICard>(null);
  currentPlayer$ = new BehaviorSubject<string>(null);
  whoAmI: string;
  everyoneMsg$ = new BehaviorSubject<string>(null);
  currentPlayerMsg: string;
  allowChoosePlayer$ =  new BehaviorSubject<boolean>(false);
  chosenPlayer$ =  new BehaviorSubject<string>(null);
  canEndTurn: boolean;

  constructor() { }

  setCurrentCard(card: ICard) {
    this.currentCard$.next(card);
  }

  runCardOne() {
    this.canEndTurn = true;
  }

  runCardTwo() {
    this.currentPlayerMsg = "Choose someone to drink";
    this.allowChoosePlayer$.next(true);

    this.chosenPlayer$.pipe(
      filter(play => !!play),
      take(1)
    ).subscribe((player) => {
      const person = this.currentPlayer$.value == this.whoAmI ? 'You' : this.currentPlayer$.value;
      this.everyoneMsg$.next(`${person} chose ${player} to drink!`);
      this.canEndTurn = true;
    });
  }

  runCardThree() {
    this.canEndTurn = true;
    const person = this.currentPlayer$.value == this.whoAmI ? 'You' : this.currentPlayer$.value;
    this.everyoneMsg$.next(`${person} drink!`);
  }

  runCardFour() {
    this.canEndTurn = true;
  }

  runCardFive() {
    this.canEndTurn = true;
  }

  runCardSix() {
    this.canEndTurn = true;
  }

  runCardSeven() {
    this.canEndTurn = true;
  }

  runCardEight() {
    this.canEndTurn = true;
  }

  runCardNine() {
    this.canEndTurn = true;
  }

  runCardTen() {
    this.canEndTurn = true;
  }

  runCardJack() {
    this.canEndTurn = true;
  }

  runCardQueen() {
    this.canEndTurn = true;
  }

  runCardKing() {
    this.canEndTurn = true;
  }
}