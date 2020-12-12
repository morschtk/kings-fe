import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  currentCard$ = new BehaviorSubject<ICard>(null);
  currentPlayer$ =  new BehaviorSubject<string>(null);
  whoAmI: string;
  canEndTurn: boolean;
  players$ = new BehaviorSubject<string[]>([]);

  constructor() { }

  setCurrentCard(card: ICard) {
    this.currentCard$.next(card);
  }

  // Next function to clear out curr card and set next player


  runCardOne() {
    this.canEndTurn = true;
  }

  runCardTwo() {
    this.canEndTurn = true;
  }

  runCardThree() {
    this.canEndTurn = true;
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