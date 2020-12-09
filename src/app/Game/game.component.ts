import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  user: string;

  constructor() {}

  ngOnInit() {
    this.user = sessionStorage.getItem('kings');
  }
}