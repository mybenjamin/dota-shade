import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared Modules
import { AngularMaterial } from './angular-material.module';

// Shared Components
import { PlayerCardComponent } from './components/player-card/player-card.component';



@NgModule({
  declarations: [
    PlayerCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterial
  ],
  exports: [
    PlayerCardComponent
  ]
})
export class SharedModule { }
