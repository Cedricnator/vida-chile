import { Inject, Injectable } from '@angular/core';
import {  OPERATIVE_TOKEN } from '../infrastructure/operative.provider';
import { OperativeRepository } from '../domain/operative.repository';
import { Observable } from 'rxjs';
import { CreateOperativeParams, OperativeModel } from '../domain/operative.model';

@Injectable({
   providedIn: 'root'
})
export class OperativeService {
   constructor(@Inject(OPERATIVE_TOKEN) private _operativeRepository: OperativeRepository) { }
   
   public getOperatives(): Observable<OperativeModel[]>{
      return this._operativeRepository.getOperatives();
   }

   public createOperative(params: CreateOperativeParams): Observable<any>{
      return this._operativeRepository.createOperative(params);
   }

   public deleteOperative(id: number): Observable<any>{
      return this._operativeRepository.deleteOperative(id);
   }

   public updateOperative(): Observable<any>{
      return this._operativeRepository.updateOperative();
   }

}