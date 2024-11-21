import { inject, Injectable } from '@angular/core';
import { FormRepository } from '../domain/form.repository';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class FormApiService implements FormRepository {
   private readonly _http = inject(HttpClient);
   private readonly _domainUrl = environment.domain_url;
   private readonly _apiUrl = environment.api_url
   private readonly _baseUrl = this._domainUrl + this._apiUrl
   
   /**
    * Fetches the list of forms from the API.
    * @returns {Observable<any>} An observable containing the list of forms.
    */
   public getForms(): Observable<any> {
      return this._http.get(`${this._baseUrl}/v1/forms`)
   }
   
}