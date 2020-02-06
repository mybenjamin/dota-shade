import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages Modules
import { PagesRoutingModule } from './pages.routing';
import { HomeComponent } from './home/home.component';

// Pages Components

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
