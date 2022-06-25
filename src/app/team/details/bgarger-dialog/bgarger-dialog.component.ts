import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LanguageService} from "../../../services/language.service";

@Component({
    selector: 'app-bgarger-dialog',
    templateUrl: './bgarger-dialog.component.html',
    styleUrls: ['./bgarger-dialog.component.less']
})
export class BgargerDialogComponent implements AfterViewInit {


    constructor(public dialog: MatDialog,
                public languageService: LanguageService) {
    }


    openDialog(): void {
    }

    close() {
        this.dialog.closeAll();
    }


    ngAfterViewInit(): void {


    }

}
