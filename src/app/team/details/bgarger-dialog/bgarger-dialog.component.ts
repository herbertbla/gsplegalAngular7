import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {GspTranslationServiceService} from "../../../services/gsp-translation-service.service";

@Component({
    selector: 'app-bgarger-dialog',
    templateUrl: './bgarger-dialog.component.html',
    styleUrls: ['./bgarger-dialog.component.less']
})
export class BgargerDialogComponent implements AfterViewInit {


    constructor(public dialog: MatDialog,
                public gpsTS: GspTranslationServiceService) {
    }


    openDialog(): void {
    }

    onClose() {
        this.dialog.closeAll();
    }


    ngAfterViewInit(): void {

    }



}
