import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Inject,
    Input, OnDestroy,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DetailDialogModel} from '../../models/detail.dialog.model';
import {ComponentPortal} from "@angular/cdk/portal";

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
export class DetailDialogComponent implements OnDestroy{

    @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;

    componentRef: ComponentRef<any>;
    public detailDialogModel: DetailDialogModel;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private resolver: ComponentFactoryResolver,
                public dialog: MatDialog) {

        this.detailDialogModel = data.model;

        const factory = this.resolver.resolveComponentFactory(this.detailDialogModel.matCardContentComponent);
        this.componentRef = this.vcRef.createComponent(factory);
        console.log('data: ');
        console.log(data);
    }

    openDialog(): void {
    }

    close() {
        this.dialog.closeAll();
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}

