import { Inject, Injectable } from '@angular/core';
import { BLOODBANK_REPOSITORY, BLOODBANK_TOKEN } from '../infrastructure/bloodbank.provider';
import { BloodBankRepository } from '../domain/bloodbank.repository';

@Injectable({
   providedIn: 'root'
})
export class BloodBankService {
   constructor(@Inject(BLOODBANK_TOKEN) private _bloodBankRepository: BloodBankRepository) { }

   public getBloodBank(id: number){
      return this._bloodBankRepository.getBloodBank(id);
   }
}