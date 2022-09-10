import { Component, OnInit } from '@angular/core';
import {GspTranslationServiceService} from "../services/gsp-translation-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public gpsTS: GspTranslationServiceService) { }

  ngOnInit() {
  }

}
