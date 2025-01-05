import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OperativeRepository } from '../domain/operative.repository';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreateOperativeParams, OperativeModel } from '../domain/operative.model';

@Injectable()
export class OperativeApiService implements OperativeRepository {
   private readonly _http = inject(HttpClient);
   private readonly _domainUrl = environment.domain_url;
   private readonly _apiUrl = environment.api_url;
   private readonly _baseUrl = this._domainUrl + this._apiUrl;
   
   createOperative(params: CreateOperativeParams): Observable<any> {
      return this._http.post(`${this._baseUrl}/v1/operative/`, {
         ...params
      })
   }
   
   getOperatives(): Observable<any> {
      return this._http.get(`${this._baseUrl}/v1/operative/`)
   }

   getOperative(id: number): Observable<OperativeModel> {
      return this._http.get<OperativeModel>(`${this._baseUrl}/vi/operative/${id}`)
   }
   
   deleteOperative(id: number): Observable<any> {
      return this._http.get(`${this._baseUrl}/v1/operative/${id}`)
   }

   updateOperative(): Observable<any> {
      throw new Error('Method not implemented.');
   }
}