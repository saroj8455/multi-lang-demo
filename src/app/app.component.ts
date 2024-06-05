import { NgFor } from '@angular/common';

import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import {
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NgFor],
  providers: [TranslateService, TranslateStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lang-demo';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'hi']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    // console.log(browserLang);

    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }
}
