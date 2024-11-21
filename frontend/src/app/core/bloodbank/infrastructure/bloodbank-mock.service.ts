import { Injectable } from '@angular/core';
import { BloodBankRepository } from '../domain/bloodbank.repository';
import { delay, Observable, of } from 'rxjs';
import { getBloodBankResponse } from '../domain/bloodbank.model';

@Injectable()
export class BloodBankMockService implements BloodBankRepository {
   
   /**
    * Retrieves the details of a blood bank by its ID.
    * @param {number} id - The unique identifier of the blood bank.
    * @returns {Observable<getBloodBankResponse>} An observable containing the blood bank details.
    */
   public getBloodBank(id: number): Observable<getBloodBankResponse> {
      const bloodBank = {
         name: "Banco de Sangre Ufro",
         description: "Banco de Sangre de la Universidad de la Frontera",
         image: null,
         fullAddress: "Manuel Montt 115, Temuco"
      }
      return of(bloodBank).pipe(delay(300))
   }
   
}