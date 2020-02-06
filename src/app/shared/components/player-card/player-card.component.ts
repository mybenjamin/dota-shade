import { Component, OnInit, Input } from '@angular/core';

// Models
import { Player } from 'src/app/core/models/Player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() { }

  getRankMedalImageUrl(rank: number) {
    const str = rank.toString();
    const image = {
      medal: `../../../../assets/images/ranks/rank_icon_${str[0]}.png`,
      stars: `../../../../assets/images/ranks/rank_star_${str[1] || 1}.png`
    };
    return image;
  }
}
