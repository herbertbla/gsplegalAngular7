import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private language = 'en';


    constructor() {
    }

    public isGerman(): boolean {
        return this.language === 'de';
    }

    public setEnglish() {
      this.language = 'en';
    }

    public setGerman() {
      this.language = 'de';
    }
}
