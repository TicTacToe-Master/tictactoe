import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ChooseXOComponent } from './components/choose-xo/choose-xo.component';
import { ScoreDisplayComponent } from './components/score-display/score-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ChooseXOComponent,
    ScoreDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
