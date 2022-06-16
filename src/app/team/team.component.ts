import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DetailDialogComponent} from '../utils/detail-dialog/detail-dialog.component';
import {tap} from 'rxjs/operators';


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

    onclick(str: string, event) {
        const xpos = event.x + 'px';
        const ypos = event.y + 'px';
        this.dialogRef = this.dialog.open(DetailDialogComponent, {
            position: { top: ypos, left: xpos },
            maxWidth: '100vw',
            maxHeight: '100vw',
            minWidth: '300px',
            minHeight: '500px',
            data: {name: str},
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
