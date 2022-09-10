import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GspTranslationServiceService} from "../../../services/gsp-translation-service.service";

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import * as $ from 'jquery';

@Component({
    selector: 'app-bgarger-dialog',
    templateUrl: './bgarger-dialog.component.html',
    styleUrls: ['./bgarger-dialog.component.scss']
})
export class BgargerDialogComponent implements AfterViewInit {
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
