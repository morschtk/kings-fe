import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { AppService, ICard, IPlayer } from './app-service';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;

  constructor(
    private appService: AppService,
  ) { }

  setupSocketConnection() {
    this.socket = io(environment.apiUrl, {
      query: {
        user: 'some user'
      }
    });

    this.socket.on('playerAdded', (data) => {
      const { currentPlayer, players } = data;
      this.appService.currentPlayer$.next(currentPlayer);
      this.appService.players$.next(players);

      this.appService.isInGame = true;
      sessionStorage.setItem('kingsUser', `${this.appService.whoAmI}`);
    })

    this.socket.on('currentCard', (card: ICard) => {
      this.appService.setCurrentCard(card);
    });

    this.socket.on('choosePlayer', (player: IPlayer) => {
      this.appService.chosenPlayer$.next(player);
    });
    
    this.socket.on('updatePlayers', (players: IPlayer[]) => {
      this.appService.updatePlayers(players);
    });

    // This is were all the reset logic for each turn is
    this.socket.on('nextPlayerTurn', (player: IPlayer) => {
      this.appService.currentCard$.next(null);
      this.appService.currentPlayer$.next(player);
      this.appService.chosenPlayer$.next(null)
      this.appService.everyoneMsg$.next(null);
      this.appService.currentPlayerMsg = null;
      this.appService.allowChoosePlayer$.next(null);
      this.appService.canEndTurn = false;
      this.appService.players$.value.forEach(player => player.isGood = false);
    });
  }

  addPlayer(name: string) {
    this.socket.emit('addPlayer', name);
  }

  choosePlayer(player: IPlayer) {
    this.socket.emit('choosePlayerBE', player);
  }

  clickedSeven() {
    this.socket.emit('clickedSeven', this.appService.whoAmI);
  }
  
  drawCard() {
    // Can pass player info down the line
    this.socket.emit('draw');
  }

  endTurn() {
    // Set up safe gaurd to not allow dbl click needs to be the index
    this.socket.emit('endTurn');
  }
}
