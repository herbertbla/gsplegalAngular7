import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GspTranslationServiceService} from "../../../services/gsp-translation-service.service";

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';


@Component({
  selector: 'app-umgruendungen-dialog',
  templateUrl: './umgruendungen-dialog.component.html',
  styleUrls: ['./umgruendungen-dialog.component.less']
})
export class UmgruendungenDialogComponent implements AfterViewInit {

  faXmark = faXmark;

  constructor(public dialog: MatDialog,
              public gpsTS: GspTranslationServiceService) {

  }


  openDialog(): void {
  }

  onClose() {
    this.dialog.closeAll();
  }


  ngAfterViewInit(): void {
    $.find(".mat-card-header-text")[0].style.width="100%";
  }


}