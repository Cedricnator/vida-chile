import { Injectable } from '@angular/core';
import { AuthRepository } from '../domain/auth.repository';
import { Observable } from 'rxjs';

@Injectable()
export class AuthMockService implements AuthRepository {
   
   login(): Observable<any> {
      throw new Error('Method not implemented.');
   }

   logout(): Observable<any> {
      throw new Error('Method not implemented.');
   }
}