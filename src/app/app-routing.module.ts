import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamComponent} from "./team/team.component";
import {TaetigkeitComponent} from "./taetigkeit/taetigkeit.component";
import {HomeComponent} from "./home/home.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {InternationalComponent} from "./international/international.component";

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'home', component: HomeComponent },
  { path: 'taetigkeitsbereich', component: TaetigkeitComponent },
  { path: 'international', component: InternationalComponent },
  { path: 'kontakt', component:  KontaktComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
