import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { AppService, ICard } from './app-service';

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

    
    this.socket.on('currentCard', (card: ICard) => {
      console.log(card);
      this.appService.currentCard$.next(card);
    });
  }
  
  drawCard() {
    // Can pass player info down the line
    this.socket.emit('draw');
  }
}
