import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TaetigkeitComponent } from './taetigkeit/taetigkeit.component';
import { HomeComponent } from './home/home.component';
import { InternationalComponent } from './international/international.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { HaftungsausschlussComponent } from './haftungsausschluss/haftungsausschluss.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TaetigkeitComponent,
    HomeComponent,
    InternationalComponent,
    KontaktComponent,
    ImpressumComponent,
    HaftungsausschlussComponent,
    DatenschutzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
