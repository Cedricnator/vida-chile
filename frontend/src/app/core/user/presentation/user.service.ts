import { Inject, Injectable } from '@angular/core';
import { USER_REPOSITORY } from '../infrastructure/user.provider';
import { UserRepository } from '../domain/user.repository';
import { Observable } from 'rxjs';
import { UserModel } from '../domain/user.model';

@Injectable({
   providedIn: 'root'
})
export class UserService {
   constructor(@Inject(USER_REPOSITORY) private _userRepository: UserRepository){}

   /**
    * Retrieves a worker by their ID.
    * @param {number} id - The ID of the worker to retrieve.
    * @returns {Observable<UserModel>} An observable containing the worker's user model.
    */
   public getWorker(id: number): Observable<UserModel>{
      return this._userRepository.getWorkerById(id);
   }
   
}