import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GspTranslationServiceService} from "../../../services/gsp-translation-service.service";

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';

@Component({
  selector: 'app-vertrag-dialog',
  templateUrl: './vertrag-dialog.component.html',
  styleUrls: ['./vertrag-dialog.component.less']
})
export class VertragDialogComponent  implements AfterViewInit {

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