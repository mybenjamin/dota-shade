import { Component, Input, OnChanges, ElementRef } from '@angular/core';

// Models
import { Player } from 'src/app/core/models/Player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnChanges {

  @Input() player: Player;
  reload = true;
  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.refreshComponent();
  }

  getRankMedalImageUrl(rank: number) {
    const str = rank.toString();
    const image = {
      medal: `../../../../assets/images/ranks/rank_icon_${str[0]}.png`,
      stars: `../../../../assets/images/ranks/rank_star_${str[1] || 1}.png`
    };
    return image;
  }

  refreshComponent() {
    this.reload = false;
    setTimeout(() => {
      this.reload = true;
    }, 500);
  }
}
