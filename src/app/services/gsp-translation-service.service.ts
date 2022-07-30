import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
    providedIn: 'root'
})
export class GspTranslationServiceService {

    constructor(public translateService: TranslateService) {
    }

    isGerman(): boolean {
        return this.translateService.currentLang === 'de';
    }
}
