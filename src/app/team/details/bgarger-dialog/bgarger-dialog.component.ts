import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DetailDialogModel} from "../../../models/detail.dialog.model";
import {LanguageService} from "../../../services/language.service";

@Component({
    selector: 'app-bgarger-dialog',
    templateUrl: './bgarger-dialog.component.html',
    styleUrls: ['./bgarger-dialog.component.less']
})
export class BgargerDialogComponent {

    public detailDialogModel: DetailDialogModel;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialog: MatDialog,
                public languageService : LanguageService) {
        this.detailDialogModel = data.model;
    }



    openDialog(): void {
    }

    close() {
        this.dialog.closeAll();
    }

}
