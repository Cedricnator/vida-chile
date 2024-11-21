import { Inject, Injectable } from '@angular/core';
import { FORM_REPOSITORY } from '../infrastructure/form.provider';
import { FormRepository } from '../domain/form.repository';

@Injectable({
   providedIn: 'root'
})
export class FormService {
   constructor(@Inject(FORM_REPOSITORY) private _formRepository: FormRepository) { }
   
   public getForms(){
      return this._formRepository.getForms()
   }
}