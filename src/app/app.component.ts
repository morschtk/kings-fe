import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isInGame: boolean;

  constructor(
    private httpService: AppService,
    private socketService: SocketioService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.socketService.setupSocketConnection();
    const userName = sessionStorage.getItem('kingsUser');
    if (userName) {
      this.httpService.addInGame(userName).subscribe(res => {
        this.isInGame = true;
        this.userName = userName;
        console.log(res);
      });
      // Transition to game
    } else {
      // Transition to login
    }
  }

  addUser() {
    debugger;
    this.httpService.addInGame(this.newUser).subscribe(res => {
      this.isInGame = true;
      this.userName = this.newUser;
      sessionStorage.setItem('kingsUser', this.newUser);
      this.router.navigate(['game']);
    });
    this.httpService.getUsers().subscribe(res => {
      console.log(res);
    });
  }
}
