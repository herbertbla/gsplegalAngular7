import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GspTranslationServiceService} from "../../../services/gsp-translation-service.service";

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';

@Component({
  selector: 'app-datenschutz-dialog',
  templateUrl: './datenschutz-dialog.component.html',
  styleUrls: ['./datenschutz-dialog.component.less']
})
export class DatenschutzDialogComponent  implements AfterViewInit {

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
