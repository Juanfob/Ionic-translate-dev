<!-- Copy and paste the converted output. -->

<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 0.363 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β29
* Wed Aug 12 2020 08:40:40 GMT-0700 (PDT)
* Source doc: Documento sin título
----->




*   Start ionic project
    *   ionic start academyTranslate blank --type=angular
*   Create the following page and service
    *   ionic g page pages/languagePopover
    *   ionic g service services/language
*   Install the translate library
    *   npm install --save @ngx-translate/core @ngx-translate/http-loader
*   Install the storage
    *   ionic cordova plugin add cordova-sqlite-storage
    *   npm install @ionic/storage --save
*   Generate the json language files in /assets/i18n
*   go to app.module.ts and 
    *   import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
    *   import { TranslateHttpLoader } from '@ngx-translate/http-loader';
    *   import { HttpClientModule, HttpClient } from '@angular/common/http';
    *   import { IonicStorageModule } from ‘@ionic/storage’
    *   imports:
    *   HttpClientModule,
    *   IonicStorageModule.forRoot(),
    *   to use TranslateModule imported in imports, we need to create a function

            _export function createTranslateLoader(http: HttpClient) {_


            _  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");_


            _}_

*   and the TranslateModule imported:	

        TranslateModule.forRoot({


              loader: {


                provide: TranslateLoader,


                useFactory: createTranslateLoader,


                deps: [HttpClient]


              }


            }),

*   We import also LanguagePopOverPageModule
*   create the functionality in the service
*   in app.component.ts
    *   in constructor we inyect languageSevice
    *   in initializaApp we use it
*   in home.module.ts
    *   create the cons routes
    *   import TranslateModule (from ngx translate)
*   In home.page.ts
    *   create the functions for the buttons
*   in home.html
    *   we use the pipe “translate” for the json keys
*   in language-popover.ts
