import { Component, OnInit } from '@angular/core';
import {GspTranslationServiceService} from "../services/gsp-translation-service.service";

@Component({
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.less']
})
export class DatenschutzComponent implements OnInit {

  constructor( public gpsTS: GspTranslationServiceService) { }

  ngOnInit() {
  }

}
