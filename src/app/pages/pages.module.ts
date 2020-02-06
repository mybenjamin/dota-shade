import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages Modules
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/shared.module';

// Pages Components
import { HomeComponent } from './home/home.component';
import { AngularMaterial } from '../shared/angular-material.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularMaterial,
    SharedModule,
  ]
})
export class PagesModule { }
