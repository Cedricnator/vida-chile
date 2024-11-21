import { Inject, Injectable } from '@angular/core';
import { AUTH_TOKEN } from '../infrastructure/auth.provider';
import { AuthRepository } from '../domain/auth.repository';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   constructor(@Inject(AUTH_TOKEN) private _authRepository: AuthRepository) { }
   
   public login(){
      return this._authRepository.login()
   }

   public logout(){
      return this._authRepository.logout()
   }
}