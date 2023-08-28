import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { TopoComponent } from './topo/topo.component';
import { InicialComponent } from './inicial/inicial.component';
import { VelozesComponent } from './velozes/velozes.component';
import { CarosComponent } from './caros/caros.component';
import { KoenigseggComponent } from './koenigsegg/koenigsegg.component';
import { RollsroyceComponent } from './rollsroyce/rollsroyce.component';
import { BugattiComponent } from './bugatti/bugatti.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    InicialComponent,
    VelozesComponent,
    CarosComponent,
    KoenigseggComponent,
    RollsroyceComponent,
    BugattiComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
