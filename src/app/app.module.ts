import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeamComponent} from './team/team.component';
import {TaetigkeitComponent} from './taetigkeit/taetigkeit.component';
import {HomeComponent} from './home/home.component';
import {InternationalComponent} from './international/international.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {HaftungsausschlussComponent} from './haftungsausschluss/haftungsausschluss.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { BgargerDialogComponent } from './team/details/bgarger-dialog/bgarger-dialog.component';

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
        DatenschutzComponent,
        BgargerDialogComponent,
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
        ScullyLibModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
