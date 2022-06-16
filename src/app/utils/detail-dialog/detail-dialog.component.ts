import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DetailDialogModel} from '../../models/detail.dialog.model';

export interface DialogData {
    animal: string;
    name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'app-detail-dialog',
    templateUrl: './detail-dialog.component.html',
    styleUrls: ['./detail-dialog.component.less']
})
export class DetailDialogComponent {


    public detailDialogModel: DetailDialogModel;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {

        this.detailDialogModel = data.model;
        console.log('data: ');
        console.log(data);
    }

    openDialog(): void {
    }

    close() {
        this.dialog.closeAll();
    }
}

