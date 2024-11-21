import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AUTH_REPOSITORY } from './core/auth/infrastructure/auth.provider';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { routes } from './app.routes';
import { BLOODBANK_REPOSITORY } from './core/bloodbank/infrastructure/bloodbank.provider';
import { FORM_REPOSITORY } from './core/form/infrastructure/form.provider';
import { OPERATIVE_REPOSITORY } from './core/operatives/infrastructure/operative.provider';
import { USER_REPOSITORY } from './core/user/infrastructure/user.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withViewTransitions()), 
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),

    // Injection Tokens
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline'} },
    AUTH_REPOSITORY, 
    BLOODBANK_REPOSITORY,
    FORM_REPOSITORY,
    OPERATIVE_REPOSITORY,
    USER_REPOSITORY
  ]
};
