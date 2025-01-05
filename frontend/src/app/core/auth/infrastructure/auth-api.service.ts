import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthRepository } from '../domain/auth.repository';
import { Observable } from 'rxjs';
import { LoginApiResponse, LogoutApiResponse } from '../domain/account.model';

@Injectable()
export class AuthApiService implements AuthRepository {
   private readonly _http = inject(HttpClient);
   private readonly _domainUrl = environment.domain_url;
   private readonly _apiUrl = environment.api_url
   private readonly _baseUrl = this._domainUrl + this._apiUrl
   
   public login(userName: string, password: string): Observable<LoginApiResponse> {
      console.log(userName, password)
      return this._http.post<LoginApiResponse>(`${this._baseUrl}/v1/auth/login`, {
         username: userName,
         password: password
      })
   }

   public logout(): Observable<LogoutApiResponse> {
      return this._http.post<LogoutApiResponse>(`${this._baseUrl}/v1/auth/logout`, {})
   }
}