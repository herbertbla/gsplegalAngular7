import {Component, HostListener} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'gsplegal';
    germanSelected = false;


    public screenWidth: any;
    public screenHeight: any;

    changeLanguage = function (key) {
        this.germanSelected = (key === 'de');
        this.translate.use(key);
    };

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('de');
    }

    openTodo = function () {
        window.open('http://jupiter.bplaced.net/todo.htm');
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        console.log(this.screenWidth + '/' + this.screenHeight);
    }
}
