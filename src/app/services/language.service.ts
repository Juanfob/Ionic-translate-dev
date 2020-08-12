import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService, private storage: Storage) { }

  /**
   * This is called from app.component.ts to establishe the initial language
   */
  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    console.log('Browser language: ', language);
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });    
  }

  getLanguages() {
    return [
      { text: 'English', value: 'en', img: 'assets/imgs/uk.svg' },
      { text: 'Spanish', value: 'es', img: 'assets/imgs/espana.svg'}
    ]
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
