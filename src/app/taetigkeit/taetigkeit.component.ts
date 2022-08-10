import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {GspTranslationServiceService} from "../services/gsp-translation-service.service";
import {TemplateComponent} from "./details/template/template.component";
import {GesellschaftsrechtDialogComponent} from "./details/gesellschaftsrecht-dialog/gesellschaftsrecht-dialog.component";
import {UmgruendungenDialogComponent} from "./details/umgruendungen-dialog/umgruendungen-dialog.component";
import {MergersDialogComponent} from "./details/mergers-dialog/mergers-dialog.component";
import {ArbeitsrechtDialogComponent} from "./details/arbeitsrecht-dialog/arbeitsrecht-dialog.component";
import {GlobalmobilityDialogComponent} from "./details/globalmobility-dialog/globalmobility-dialog.component";
import {BankenDialogComponent} from "./details/banken-dialog/banken-dialog.component";
import {VertragDialogComponent} from "./details/vertrag-dialog/vertrag-dialog.component";
import {OeffentlichesrechtDialogComponent} from "./details/oeffentlichesrecht-dialog/oeffentlichesrecht-dialog.component";
import {ImmobilienDialogComponent} from "./details/immobilien-dialog/immobilien-dialog.component";
import {DatenschutzDialogComponent} from "./details/datenschutz-dialog/datenschutz-dialog.component";

@Component({
  selector: 'app-taetigkeit',
  templateUrl: './taetigkeit.component.html',
  styleUrls: ['./taetigkeit.component.less']
})
export class TaetigkeitComponent implements OnInit {
  private matDialogRef: MatDialogRef<any, any>;

  constructor(public dialog: MatDialog,
              public gpsTS: GspTranslationServiceService) { }

  ngOnInit() {
  }


  onclick(dialogId: string) {
    let dialogComponent = TemplateComponent;
    if (dialogId === 'gesellschaftsrecht') {
      dialogComponent = GesellschaftsrechtDialogComponent;
    } else if (dialogId === 'umgruendungen') {
      dialogComponent = UmgruendungenDialogComponent;
    }  else if (dialogId === 'mergers') {
      dialogComponent = MergersDialogComponent;
    } else if (dialogId === 'arbeitsrecht') {
      dialogComponent = ArbeitsrechtDialogComponent;
    } else if (dialogId === 'globalmobility') {
      dialogComponent = GlobalmobilityDialogComponent;
    } else if (dialogId === 'banken') {
      dialogComponent = BankenDialogComponent;
    } else if (dialogId === 'vertrag') {
      dialogComponent = VertragDialogComponent;
    } else if (dialogId === 'oeffentlichesrecht') {
      dialogComponent = OeffentlichesrechtDialogComponent;
    } else if (dialogId === 'immobilien') {
      dialogComponent = ImmobilienDialogComponent;
    } else if (dialogId === 'datenschutz') {
      dialogComponent = DatenschutzDialogComponent;
    }
    if (!!dialogComponent) {

      this.matDialogRef = this.dialog.open(dialogComponent, {
        maxWidth: '100vw',
        maxHeight: '100vw',
      });
    }
  }
}
