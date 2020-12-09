import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable()
export class AppService {

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

  // private generateHeaders = () => {
  //   return {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   }
  // }

}