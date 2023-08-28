import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { VelozesComponent } from './velozes/velozes.component';
import { CarosComponent } from './caros/caros.component';
import { KoenigseggComponent } from './koenigsegg/koenigsegg.component';
import { RollsroyceComponent } from './rollsroyce/rollsroyce.component';
import { BugattiComponent } from './bugatti/bugatti.component';

const routes: Routes = [
  { path: "", redirectTo: 'inicial', pathMatch: 'full' },
  { path: "inicial", component: InicialComponent},
  { path: "velozes", component: VelozesComponent},
  { path: "caros", component: CarosComponent},
  { path: "koenigsegg", component: KoenigseggComponent},
  { path: "rollsroyce", component: RollsroyceComponent},
  { path: "bugatti", component: BugattiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
