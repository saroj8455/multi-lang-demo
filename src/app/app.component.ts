import { NgFor } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }
}
