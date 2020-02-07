import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'src/app/core/services/data.service';
import { PlayerSelectorService } from '../../services/player-selector.service';

// Models
import { Player } from 'src/app/core/models/Player';

@Component({
  selector: 'app-player-selector',
  templateUrl: './player-selector.component.html',
  styleUrls: ['./player-selector.component.scss']
})
export class PlayerSelectorComponent implements OnInit {

  players: Array<Player>;
  player$: Player;

  constructor(
    private selector: PlayerSelectorService,
    private data: DataService
  ) { }

  async ngOnInit() {
    this.selector.player.asObservable().subscribe(x => this.player$ = x);
    this.players = await this.getAllPlayers();
  }

  async getAllPlayers() {
    const players: Array<Player> = [];
    for (const player of this.selector.players) {
      this.data.getPlayer(player.id).subscribe(p => players.push(p));
    }
    return players;
  }

  setSelectedPlayer(player: Player) {
    this.selector.player.next(player);
  }

}
