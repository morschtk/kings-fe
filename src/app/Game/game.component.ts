import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, IPlayer } from '../app-service';
import { SocketioService } from '../socketio.service';
import { filter, take } from 'rxjs/operators'

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
          break;
        case 2:
          this.appService.runCardTwo();
          break;
        case 3:
          this.appService.runCardThree();
          break;
        case 4:
          this.appService.runCardFour();
          break;
        case 5:
          this.appService.runCardFive();
          break;
        case 6:
          this.appService.runCardSix();
          break;
        case 7:
          this.appService.runCardSeven();
          break;
        case 8:
          this.appService.runCardEight();
          break;
        case 9:
          this.appService.runCardNine();
          break;
        case 10:
          this.appService.runCardTen();
          break;
        case 11:
          this.appService.runCardJack();
          break;
        case 12:
          this.appService.runCardQueen();
          break;
        case 13:
          this.appService.runCardKing();
          break;
      }
    })
  }

  drawCard() {
    this.socketService.drawCard();
  }

  endTurn() {
    this.socketService.endTurn();
  }

  choosePlayer(player: IPlayer) {
    this.socketService.choosePlayer(player);
  }

  @HostListener('document:keydown', ['$event'])
  listenForSeven(event: KeyboardEvent) {
    this.appService.currentCard$.pipe(
      filter(card => !!card),
      take(1)
    ).subscribe((card) => {
      if (card.number == 7 && event.key == '7') {
        console.log('you made it', event.key);
        this.socketService.clickedSeven();
      } else {
        console.log('NO NO NO TRY AGAIN!');
      }
    });
  }

}