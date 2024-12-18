import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AUTH_REPOSITORY } from './core/auth/infrastructure/auth.provider';
import { BLOODBANK_REPOSITORY } from './core/bloodbank/infrastructure/bloodbank.provider';
import { FORM_REPOSITORY } from './core/form/infrastructure/form.provider';
import { OPERATIVE_REPOSITORY } from './core/operatives/infrastructure/operative.provider';
import { USER_REPOSITORY } from './core/user/infrastructure/user.provider';
import { APP_INITIALIZER, ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { OverlayRef } from '@angular/cdk/overlay';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideAnimations(),
    
    // Injection Tokens
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline'} },
    
    AUTH_REPOSITORY, 
    BLOODBANK_REPOSITORY,
    FORM_REPOSITORY,
    OPERATIVE_REPOSITORY,
    USER_REPOSITORY,
  ]
};
