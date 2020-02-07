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
  isLoading = true;

  constructor(
    private playerSelector: PlayerSelectorService,
    private data: DataService
  ) { }

  async ngOnInit() {
    this.players = await this.getAllPlayers();
  }

  async getAllPlayers() {
    const players: Array<Player> = [];
    for (const player of this.playerSelector.players) {
      this.data.getPlayer(player.id).subscribe(p => players.push(p));
    }
    return players;
  }

  setSelectedPlayer(player: Player) {
    if (!this.playerSelector.selectedPlayer1) {
      this.playerSelector.selectedPlayer1 = player;
    } else {
      this.playerSelector.selectedPlayer2 = this.playerSelector.selectedPlayer1;
      this.playerSelector.selectedPlayer1 = player;
    }
  }

  player1 = () => this.playerSelector.selectedPlayer1;
  player2 = () => this.playerSelector.selectedPlayer2;

}
