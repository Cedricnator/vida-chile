import { Injectable } from '@angular/core';
import { AuthRepository } from '../domain/auth.repository';
import { Observable, of } from 'rxjs';
import { LoginApiResponse, LogoutApiResponse } from '../domain/account.model';

@Injectable()
export class AuthMockService implements AuthRepository {
   
   public login(userName: string, password: string): Observable<LoginApiResponse> {
      const mockLogin ={
         "success": true,
         "data": {
            "id": 1,
            "username": "cedricnator"
         },
         "message": "Login successful."
      }
      return of(mockLogin)
   }

   public logout(): Observable<LogoutApiResponse> {
      const mockResponse = {
         "success": true,
         "data": {
            "response": "Successfully logged out"
         },
         "message": "Logout successful."
      }
      
      return of(mockResponse)
   }
}