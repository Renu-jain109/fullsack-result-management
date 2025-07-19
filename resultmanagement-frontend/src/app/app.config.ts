import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';


export const appConfig: ApplicationConfig = {
  providers: [ provideAnimationsAsync(),provideAnimations(),provideToastr(),
    providePrimeNG({ 
        theme: {
            preset: Aura
        }
    }),provideHttpClient(),importProvidersFrom([BrowserAnimationsModule]),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
};
