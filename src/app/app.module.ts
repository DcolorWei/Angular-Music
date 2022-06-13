import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { SidemenuComponent } from './sidemenu/sidemenu.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerComponent } from './player/player.component'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidemenuComponent,
    PlayerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
