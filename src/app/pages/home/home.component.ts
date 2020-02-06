import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Player } from 'src/app/core/models/Player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  player: Player;
  loading = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    // this.data.getPlayer(146655393).subscribe(x => this.player = x);
    this.data.getPlayer(175322242).subscribe(x => {
      this.player = x;
      console.log(this.player);
      this.loading = false;
    });
  }
}
