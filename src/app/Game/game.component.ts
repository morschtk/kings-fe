import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service';
import { SocketioService } from '../socketio.service';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    public appService: AppService,
    private socketService: SocketioService,
    private router: Router,
  ) {
    if (!this.appService.isInGame) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.appService.currentCard$.pipe(
      filter(card => !!card)
    ).subscribe(card => {
      switch (card.number) {
        case 1:
          this.appService.runCardOne();
        case 2:
          this.appService.runCardTwo();
        case 3:
          this.appService.runCardThree();
        case 4:
          this.appService.runCardFour();
        case 5:
          this.appService.runCardFive();
        case 6:
          this.appService.runCardSix();
        case 7:
          this.appService.runCardSeven();
        case 8:
          this.appService.runCardEight();
        case 9:
          this.appService.runCardNine();
        case 10:
          this.appService.runCardTen();
        case 11:
          this.appService.runCardJack();
        case 12:
          this.appService.runCardQueen();
        case 13:
          this.appService.runCardKing();
  
      }
    })
  }

  drawCard() {
    this.socketService.drawCard();
  }

  endTurn() {
    this.socketService.endTurn();
  }


}