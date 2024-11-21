import { InjectionToken, Provider } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { AuthMockService } from './auth-mock.service';
import { AuthApiService } from "./auth-api.service";
import { AuthRepository } from "../domain/auth.repository";

export const AUTH_TOKEN = new InjectionToken<AuthRepository>("AuthRepositoy");

export const AUTH_REPOSITORY: Provider = { 
   provide: AUTH_TOKEN, 
   useClass: (environment.env === 'development') ? AuthMockService : AuthApiService
}