import { Inject, Injectable } from '@angular/core';
import { OPERATIVE_REPOSITORY } from '../infrastructure/operative.provider';
import { OperativeRepository } from '../domain/operative.repository';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ServiceNameService {
   constructor(@Inject(OPERATIVE_REPOSITORY) private _operativeRepository: OperativeRepository) { }
   
   public getOperatives(): Observable<any>{
      return this._operativeRepository.getOperatives();
   }

   public createOperative(): Observable<any>{
      return this._operativeRepository.createOperative();
   }

   public deleteOperative(id: number): Observable<any>{
      return this._operativeRepository.deleteOperative(id);
   }

   public updateOperative(): Observable<any>{
      return this._operativeRepository.updateOperative();
   }

}