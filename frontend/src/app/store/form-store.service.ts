import { inject, Injectable } from '@angular/core';
import { BaseState, BaseStateModel } from './0base.store';
import { FormService } from '../core/form/presentation/form.service';
import { Subscription } from 'rxjs';

interface FormState extends BaseStateModel {
   forms: any
}

@Injectable({
   providedIn: 'root'
})
export class FormStoreService extends BaseState<FormState>{
   private readonly _formService = inject(FormService)

   constructor() { 
      super()
      this.loadState()
   }

   /**
    * Loads the initial state for the form store.
    * This method updates the state by setting the `forms` property to an empty array.
    * It uses the `update` method of the state to merge the new state with the existing state.
    * @returns {void}
    */
   private loadState(): void{
      this.state.update((state) => ({
         ...state,
         forms: []
      }))
   }

   /**
    * Updates the state with the provided forms.
    *
    * @private
    * @param {any} forms - The forms to be set in the state.
    * @returns {void}
    */
   private setForms(forms: any): void{
      this.state.update((state) => ({
         ...state,
         forms: forms
      }))
   }


   /**
    * Fetches forms from the form service and updates the store accordingly.
    * 
    * This method sets a loading indicator to true before making the request.
    * On a successful response, it updates the store with the fetched forms.
    * If an error occurs, it sets the error in the store.
    * Finally, it sets the loading indicator to false once the request is complete.
    * @returns A subscription to the forms observable.
    */
   public getForms(): Subscription{
      this.setLoadingIndicator(true);
      return this._formService.getForms().subscribe({
         next: (forms) => {
            this.setForms(forms);
         },
         error: (err) => {
            this.setError(err);
         },
         complete: () => {
            this.setLoadingIndicator(false);
         }
      })
   }
   
}