import { Component, OnInit } from '@angular/core';

import { PlayerSelectorService } from 'src/app/layout/services/player-selector.service';
import { Player } from 'src/app/core/models/Player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  player: Player;
  loading = true;

  constructor(private selector: PlayerSelectorService) { }

  ngOnInit() {
    this.selector.player.asObservable().subscribe(x => this.player = x);
  }


}
