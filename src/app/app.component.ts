import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { AppService } from './app-service';
import { SocketioService } from './socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kings-fe';
  userName: string;
  newUser: string;

  constructor(
    public appService: AppService,
    private socketService: SocketioService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.socketService.setupSocketConnection();
    const userName = sessionStorage.getItem('kingsUser');
    if (userName) {
      this.appService.whoAmI = userName;
      this.socketService.addPlayer(userName);

      // once data is retreived go into game
      this.appService.currentPlayer$.pipe(
        filter(player => !!player),
        take(1)
      ).subscribe(() => {
        this.router.navigate(['game']);
      });
      // Transition to game
    } else {
      // Transition to login
    }
  }

  addUser() {
    if (this.appService.players$.value.find(player => player.name === this.newUser)) {
      return;
    }
    this.appService.whoAmI = this.newUser;
    this.socketService.addPlayer(this.newUser);

    // once data is retreived go into game
    this.appService.currentPlayer$.pipe(
      filter(player => !!player),
      take(1)
    ).subscribe(() => {
      this.router.navigate(['game']);
    });
  }
}
