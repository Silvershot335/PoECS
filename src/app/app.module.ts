import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetrayalComponent } from './betrayal/betrayal.component';
import { HelpComponent } from './help/help.component';
import { LabComponent } from './lab/lab.component';
import { HomeComponent } from './home/home.component';
import { LevelingComponent } from './leveling/leveling.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BetrayalComponent,
    HelpComponent,
    LabComponent,
    HomeComponent,
    LevelingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
