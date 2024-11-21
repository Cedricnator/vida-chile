import { inject, Injectable } from '@angular/core';
import { BloodBankRepository } from '../domain/bloodbank.repository';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { getBloodBankResponse } from '../domain/bloodbank.model';

@Injectable()
export class BloodBankApiService implements BloodBankRepository {
   private readonly _http = inject(HttpClient);
   private readonly _domainUrl = environment.domain_url;
   private readonly _apiUrl = environment.api_url;
   private readonly _baseUrl = this._domainUrl + this._apiUrl;
   
   /**
    * Retrieves the details of a blood bank by its ID.
    * @param {number} id - The unique identifier of the blood bank.
    * @returns {Observable<getBloodBankResponse>} An observable containing the response with blood bank details.
    */
   public getBloodBank(id: number): Observable<getBloodBankResponse> {
      return this._http.get<getBloodBankResponse>(`${this._baseUrl}/v1/bloodBank/${id}`)
   }
   
}