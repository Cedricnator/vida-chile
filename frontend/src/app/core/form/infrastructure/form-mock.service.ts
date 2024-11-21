import { Injectable } from '@angular/core';
import { FormRepository } from '../domain/form.repository';
import { Observable, of } from 'rxjs';

@Injectable()
export class FormMockService implements FormRepository {

   /**
    * Retrieves a list of forms.
    * @returns {Observable<any>} An observable that emits forms.
    */
   public getForms(): Observable<any> {
      return of([])
   }

   
}