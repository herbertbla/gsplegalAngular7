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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FspallingerDialogComponent } from './team/details/fspallinger-dialog/fspallinger-dialog.component';
import { PsteindlDialogComponent } from './team/details/psteindl-dialog/psteindl-dialog.component';
import { GesellschaftsrechtDialogComponent } from './taetigkeit/details/gesellschaftsrecht-dialog/gesellschaftsrecht-dialog.component';
import {TemplateComponent} from "./taetigkeit/details/template/template.component";
import { UmgruendungenDialogComponent } from './taetigkeit/details/umgruendungen-dialog/umgruendungen-dialog.component';
import { MergersDialogComponent } from './taetigkeit/details/mergers-dialog/mergers-dialog.component';
import { ArbeitsrechtDialogComponent } from './taetigkeit/details/arbeitsrecht-dialog/arbeitsrecht-dialog.component';
import { GlobalmobilityDialogComponent } from './taetigkeit/details/globalmobility-dialog/globalmobility-dialog.component';
import { BankenDialogComponent } from './taetigkeit/details/banken-dialog/banken-dialog.component';
import { VertragDialogComponent } from './taetigkeit/details/vertrag-dialog/vertrag-dialog.component';
import { OeffentlichesrechtDialogComponent } from './taetigkeit/details/oeffentlichesrecht-dialog/oeffentlichesrecht-dialog.component';
import { ImmobilienDialogComponent } from './taetigkeit/details/immobilien-dialog/immobilien-dialog.component';

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
        TemplateComponent,
        FspallingerDialogComponent,
        PsteindlDialogComponent,
        GesellschaftsrechtDialogComponent,
        UmgruendungenDialogComponent,
        MergersDialogComponent,
        ArbeitsrechtDialogComponent,
        GlobalmobilityDialogComponent,
        BankenDialogComponent,
        VertragDialogComponent,
        OeffentlichesrechtDialogComponent,
        ImmobilienDialogComponent,
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
        MatCardModule,
        FontAwesomeModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
