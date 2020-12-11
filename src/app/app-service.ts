import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment'

export interface ICard {
  url: string;
  number: number;
}

@Injectable()
export class AppService {
  isInGame: boolean;
  currentCard$ = new BehaviorSubject<ICard>(null);

  constructor(private http: HttpClient) { }

  buildURL(append: string = '') {
    return `${environment.apiUrl}/api/${append}`;
  }

  getUsers():Observable<any> {
    return this.http.get(this.buildURL());
  }

  addInGame(user: string): Observable<Object> {
    return this.http.post(this.buildURL('add-to-game'), {user});
  }

  // Next function to clear out curr card and set next player

}