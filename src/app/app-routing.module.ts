import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamComponent} from "./team/team.component";
import {TaetigkeitComponent} from "./taetigkeit/taetigkeit.component";

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'taetigkeit', component: TaetigkeitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
