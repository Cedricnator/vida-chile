import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AUTH_REPOSITORY } from './core/auth/infrastructure/auth.provider';
import { BLOODBANK_REPOSITORY } from './core/bloodbank/infrastructure/bloodbank.provider';
import { FORM_REPOSITORY } from './core/form/infrastructure/form.provider';
import { OPERATIVE_REPOSITORY } from './core/operatives/infrastructure/operative.provider';
import { USER_REPOSITORY } from './core/user/infrastructure/user.provider';
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes), 
    provideAnimationsAsync(),
    
    // Injection Tokens
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline'} },
    AUTH_REPOSITORY, 
    BLOODBANK_REPOSITORY,
    FORM_REPOSITORY,
    OPERATIVE_REPOSITORY,
    USER_REPOSITORY
  ]
};
