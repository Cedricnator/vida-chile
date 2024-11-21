import { inject, Injectable } from '@angular/core';
import { UserRepository } from '../domain/user.repository';
import { Observable } from 'rxjs';
import { UserModel } from '../domain/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class UserApiService implements UserRepository {
   private readonly _http = inject(HttpClient);
   private readonly _apiUrl = environment.api_url;
   private readonly _domainUrl = environment.domain_url;
   private readonly _baseUrl = this._domainUrl + this._apiUrl
   
   /**
    * Retrieves a worker by their ID.
    * @param {number} id - The unique identifier of the worker.
    * @returns {Observable<UserModel>} An observable containing the worker's user model.
    */
   public getWorkerById(id: number): Observable<UserModel> {
      return this._http.get<UserModel>(`${this._baseUrl}/v1/worker/${id}`);
   }
   
}