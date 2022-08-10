import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {GspTranslationServiceService} from "../services/gsp-translation-service.service";
import {TemplateComponent} from "./details/template/template.component";
import {GesellschaftsrechtDialogComponent} from "./details/gesellschaftsrecht-dialog/gesellschaftsrecht-dialog.component";
import {UmgruendungenDialogComponent} from "./details/umgruendungen-dialog/umgruendungen-dialog.component";

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
    }  else if (dialogId === 'psteindl') {
    }
    if (!!dialogComponent) {

      this.matDialogRef = this.dialog.open(dialogComponent, {
        maxWidth: '100vw',
        maxHeight: '100vw',
      });
    }
  }
}
