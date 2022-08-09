import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {tap} from 'rxjs/operators';
import {BgargerDialogComponent} from "./details/bgarger-dialog/bgarger-dialog.component";
import {TemplateComponent} from "./details/template/template.component";


@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
    private matDialogRef: MatDialogRef<BgargerDialogComponent, any>;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    onclick(dialogId: string, event) {
        let dialogComponent;
        if (dialogId === 'bgarger') {
            dialogComponent = BgargerDialogComponent;
        } else {
            dialogComponent = TemplateComponent;
        }
        this.matDialogRef = this.dialog.open(dialogComponent, {
            maxWidth: '100vw',
            maxHeight: '100vw',
        });
        this.matDialogRef.afterOpened().pipe(
            tap(() => {
                console.log(this.matDialogRef);
            })
        ).subscribe(() => {
            console.log('config');
        });

    }
}
