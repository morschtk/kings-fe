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
  // isInGame: boolean;

  constructor(
    public appService: AppService,
    private socketService: SocketioService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.socketService.setupSocketConnection();
    const userName = sessionStorage.getItem('kingsUser');
    if (userName) {
      this.appService.addInGame(userName).subscribe(res => {
        this.appService.isInGame = true;
        this.userName = userName;
        console.log(res);
      });
      // Transition to game
    } else {
      // Transition to login
    }
  }

  addUser() {
    this.appService.addInGame(this.newUser).subscribe(res => {
      this.appService.isInGame = true;
      this.userName = this.newUser;
      // sessionStorage.setItem('kingsUser', this.newUser);
      // sessionStorage.setItem('kingsIndex', res['index']);
      this.router.navigate(['game']);


      this.appService.getUsers().subscribe(res => {
        console.log(res);
      });
    });
  }
}
