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
      const mockUser: UserModel = {
         "id": 1,
         "name": "cedric",
         "lastName": "kirmayr",
         "email": "cedricnator@cedric.dev",
         "bloodBank": {
            id: 1,
            name: 'Banco de Sangre Ufro',
            description: 'Banco de Sangre de la Universidad de la Frontera',
            image: '',
            "address": {
               id: 1,
               street: "Manuel Montt",
               city: {
                  id: 1,
                  name: "Temuco"
               },
               number: 115,
            },
         }
      }
      return of(mockUser);
   }

}