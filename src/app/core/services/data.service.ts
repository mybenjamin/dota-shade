import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://api.opendota.com/api/players';

  constructor(private http: HttpClient) { }

  getPlayer(playerID: number): Observable<Player> {
    return this.http.get<Player>(`${this.url}/${playerID}`);
  }
}
