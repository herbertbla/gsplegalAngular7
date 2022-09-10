import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gsplegal';
  germanSelected = false;
  collapse = true;

  public screenWidth: any;
  public screenHeight: any;

  changeLanguage = function (key) {
    this.germanSelected = (key === 'de');
    this.translate.use(key);
  };


  constructor(private translate: TranslateService) {

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

  ngOnInit(): void {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  onToggleMenu() {
    this.collapse = !this.collapse;
  }
}
