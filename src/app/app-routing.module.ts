import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BetrayalComponent } from './betrayal/betrayal.component';
import { HelpComponent } from './help/help.component';
import { LabComponent } from './lab/lab.component';
import { LevelingComponent } from './leveling/leveling.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'betrayal', component: BetrayalComponent },
  { path: 'help', component: HelpComponent },
  { path: 'leveling', component: LevelingComponent },
  { path: 'lab', component: LabComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
