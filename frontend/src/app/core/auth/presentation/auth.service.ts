import { computed, Inject, Injectable, signal } from '@angular/core';
import { AUTH_TOKEN } from '../infrastructure/auth.provider';
import { AuthRepository } from '../domain/auth.repository';
import { Observable } from 'rxjs';
import { LoginApiResponse, LogoutApiResponse } from '../domain/account.model';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   constructor(@Inject(AUTH_TOKEN) private _authRepository: AuthRepository) { }
   
   private _currentUser = signal(undefined);
   
   public login(userName: string, password: string): Observable<LoginApiResponse>{
      return this._authRepository.login(userName, password)
   }

   public logout(): Observable<LogoutApiResponse>{
      return this._authRepository.logout()
   }

   public getCurrentUser(){
      return this._currentUser();
   }

}