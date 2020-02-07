import { Injectable } from '@angular/core';
import { Player } from 'src/app/core/models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerSelectorService {

  players = [
    { id: 146655393, name: 'Benjee' },
    { id: 134484246, name: 'Mellow' },
    { id: 175322242, name: 'ZOID' },
    { id: 103359047, name: 'UdieMonkey' },
    { id: 91262453, name: 'i_also_use_hax' },
    { id: 117730952, name: 'AWdC' },
    { id: 107039798, name: '[Æ]Vortex' }
  ];

  selectedPlayer1: Player;
  selectedPlayer2: Player;

  constructor() { }
}
