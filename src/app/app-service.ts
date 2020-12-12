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
  currentPlayer$ =  new BehaviorSubject<IPlayer>(null);
  whoAmI: string;
  canEndTurn: boolean;
  players$ = new BehaviorSubject<string[]>([]);

  constructor() { }

  setCurrentCard(card: ICard) {
    this.currentCard$.next(card);
  }

  // Next function to clear out curr card and set next player


  runCardOne() {
    
  }

  runCardTwo() {

  }

  runCardThree() {
    
  }

  runCardFour() {
    
  }

  runCardFive() {
    
  }

  runCardSix() {
    
  }

  runCardSeven() {
    
  }

  runCardEight() {
    
  }

  runCardNine() {
    
  }

  runCardTen() {

  }

  runCardJack() {

  }

  runCardQueen() {

  }

  runCardKing() {

  }
}