import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  user: string;

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
    this.user = sessionStorage.getItem('kings');
  }

  drawCard() {
    this.socketService.drawCard();
  }
}