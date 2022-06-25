import {AfterViewInit, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-bgarger-dialog',
    templateUrl: './bgarger-dialog.component.html',
    styleUrls: ['./bgarger-dialog.component.less']
})
export class BgargerDialogComponent implements AfterViewInit {


    constructor(public dialog: MatDialog,
                public translateService: TranslateService) {
    }


    openDialog(): void {
    }

    onClose() {
        this.dialog.closeAll();
    }


    ngAfterViewInit(): void {

    }

    isGerman():boolean {
        return this.translateService.currentLang == 'de';
    }

}
