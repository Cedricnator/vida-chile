import { Injectable } from '@angular/core';
import { UserRepository } from '../domain/user.repository';
import { Observable, of } from 'rxjs';
import { UserModel } from '../domain/user.model';

@Injectable()
export class UserMockService implements UserRepository {
   
   /**
    * Retrieves a mock worker by their ID.
    * @param id - The ID of the worker to retrieve.
    * @returns An Observable that emits the mock user data.
    */
   public getWorkerById(id: number): Observable<UserModel> {
      const mockUser = {
         "id": 1,
         "name": "cedric",
         "lastName": "kirmayr",
         "email": "cedricnator@cedric.dev",
         "bloodBank": null
      }
      return of(mockUser);
   }

}