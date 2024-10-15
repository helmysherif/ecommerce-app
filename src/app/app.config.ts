import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes , withComponentInputBinding()),
    provideHttpClient(),
    importProvidersFrom(
      NgxSpinnerModule.forRoot({
        type: 'ball-spin-fade-loader'
      }),
      BrowserAnimationsModule 
    )
  ]
};
