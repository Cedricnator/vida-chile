import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OperativeRepository } from '../domain/operative.repository';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { OperativeModel } from '../domain/operative.model';

@Injectable()
export class OperativeApiService implements OperativeRepository {
   private readonly _http = inject(HttpClient);
   private readonly _domainUrl = environment.domain_url;
   private readonly _apiUrl = environment.api_url;
   private readonly _baseUrl = this._domainUrl + this._apiUrl;
   
   createOperative(): Observable<any> {
      return this._http.post(`${this._baseUrl}/api/v1/operative`, {})
   }
   
   getOperatives(): Observable<any> {
      return this._http.get(`${this._baseUrl}/api/v1/operative`)
   }

   getOperative(id: number): Observable<OperativeModel> {
      return this._http.get<OperativeModel>(`${this._baseUrl}/api/vi/operative/${id}`)
   }
   
   deleteOperative(id: number): Observable<any> {
      return this._http.get(`${this._baseUrl}/api/v1/operative/${id}`)
   }

   updateOperative(): Observable<any> {
      throw new Error('Method not implemented.');
   }
}