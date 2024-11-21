import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthRepository } from '../domain/auth.repository';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApiService implements AuthRepository {
   private readonly _http = inject(HttpClient);
   private readonly _domainUrl = environment.domain_url;
   private readonly _apiUrl = environment.api_url
   private readonly _baseUrl = this._domainUrl + this._apiUrl
   
   login(): Observable<any> {
      return this._http.post(`${this._baseUrl}/api/v1/login`, {})
   }

   logout(): Observable<any> {
      return this._http.patch(`${this._baseUrl}/api/v1/logout`, {})
   }
}