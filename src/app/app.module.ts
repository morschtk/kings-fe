import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app-service';
import { GameComponent } from './Game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { SocketioService } from './socketio.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    SocketioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
