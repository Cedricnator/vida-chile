import { Injectable } from '@angular/core';
import { AuthRepository } from '../domain/auth.repository';
import { Observable, of, throwError } from 'rxjs';
import { LoginApiResponse, LogoutApiResponse } from '../domain/account.model';

@Injectable()
export class AuthMockService implements AuthRepository {
   
   public login(userName: string, password: string): Observable<LoginApiResponse> {
      if (userName !== 'cedricnator' || password !== '123456') {
         return throwError(() => new Error('Invalid credentials'));
      }

      const mockLogin ={
         "success": true,
         "data": {
             "id": 1,
             "username": "cedricnator",
             "worker": {
                 "id": 1,
                 "name": "cedric",
                 "lastName": "nator",
                 "email": "cedricnator@cedric.nator",
                 "bloodBank": {
                     "id": 1,
                     "name": "Banco de Sangre Ufro",
                     "description": "Banco de Sangre de la Universidad de la Frontera",
                     "image": null,
                     "address": {
                         "id": 1,
                         "street": "Manuel Montt",
                         "number": 115,
                         "city": {
                             "id": 1,
                             "name": "Temuco"
                         }
                     }
                 }
             }
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