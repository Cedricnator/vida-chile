import { inject, Injectable } from '@angular/core';
import { BaseState, BaseStateModel } from './0base.store';
import { BloodBankService } from '../core/bloodbank/presentation/bloodbank.service';
import { Subscription } from 'rxjs';

interface BloodBankState extends BaseStateModel{
   BloodBank: any
}

@Injectable({
   providedIn: 'root'
})
export class BloodBankStateService extends BaseState<BloodBankState>{
   private readonly _bloodBankService = inject(BloodBankService);

   constructor() { 
      super();
      this.loadState();
   }

   
   /**
    * Loads the initial state for the BloodBank.
    * This method updates the state by setting the BloodBank property to an empty array.
    * It uses the `update` method of the state to merge the new state with the existing state.
    */
   private loadState(): void {
      this.state.update((state) => ({
         ...state,
         BloodBank: []
      }));
   }
   
   /**
    * Updates the state with the provided blood bank information.
    * @param bloodBank - The blood bank data to be set in the state.
    */
   private setBloodBank(bloodBank: any): void {
      this.state.update((state) => ({
         ...state,
         BloodBank: bloodBank
      }));
   }

   /**
    * Fetches the blood bank information by its ID.
    * 
    * This method sets a loading indicator to true before making a request to fetch
    * the blood bank data. Once the data is fetched successfully, it sets the blood bank
    * information. In case of an error, it sets the error state. Finally, it sets the 
    * loading indicator to false once the request is complete.
    * @param {number} id - The ID of the blood bank to fetch.
    * @returns {Subscription} - The subscription to the blood bank data observable.
    */
   public getBloodBank(id: number): Subscription{
      this.setLoadingIndicator(true);
      return this._bloodBankService.getBloodBank(id).subscribe({
         next: (bloodBank) => {
            this.setBloodBank(bloodBank)
         },
         error: (err) => {
            this.setError(err)
         },
         complete: () => {
            this.setLoadingIndicator(false)
         }
      });
   }
   
}