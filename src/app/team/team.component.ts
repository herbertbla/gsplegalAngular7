import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DetailDialogComponent} from '../utils/detail-dialog/detail-dialog.component';
import {tap} from 'rxjs/operators';
import {DetailDialogModel} from "../models/detail.dialog.model";


@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
    private dialogRef: MatDialogRef<DetailDialogComponent, any>;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    onclick(id: string, event) {
        const model = new DetailDialogModel("team-bgarger", "MMag. Dr. Bernhard GARGER", "Rechtsanwalt, Partner", "supserhero");
        this.dialogRef = this.dialog.open(DetailDialogComponent, {
            maxWidth: '100vw',
            maxHeight: '100vw',
            data: {
                model
            }
        });
        this.dialogRef.afterOpened().pipe(
            tap(() => {
                console.log(this.dialogRef);
            })
        ).subscribe(() => {
            console.log('config');
        });

    }
}
