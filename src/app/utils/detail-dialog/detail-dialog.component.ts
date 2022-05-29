import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
export class DetailDialogComponent{
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px',
    //   data: {name: this.name, animal: this.animal},
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
