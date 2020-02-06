import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// App Modules
import { AppRoutingModule } from './app.routing';
import { AngularMaterial } from './shared/angular-material.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

// App Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AngularMaterial,
    PagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
