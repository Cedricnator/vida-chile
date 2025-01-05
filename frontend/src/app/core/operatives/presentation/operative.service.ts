import { Inject, Injectable } from '@angular/core';
import {  OPERATIVE_TOKEN } from '../infrastructure/operative.provider';
import { OperativeRepository } from '../domain/operative.repository';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CreateOperativeParams, OperativeModel } from '../domain/operative.model';

@Injectable({
   providedIn: 'root'
})
export class OperativeService {
   constructor(@Inject(OPERATIVE_TOKEN) private _operativeRepository: OperativeRepository) { }
   
   private operative$ = new BehaviorSubject<OperativeModel[]>([]);

   public getOperatives(): Observable<OperativeModel[]>{
      return this._operativeRepository.getOperatives().pipe(
         tap((operatives) => this.operative$.next(operatives))
      );
   }

   public createOperative(params: CreateOperativeParams): Observable<any>{
      return this._operativeRepository.createOperative(params).pipe(
         tap((newOperative: OperativeModel) => {
            const currentOperatives = this.operative$.getValue();
            this.operative$.next([...currentOperatives, newOperative]);
         })
      );
   }

   public deleteOperative(id: number): Observable<any>{
      return this._operativeRepository.deleteOperative(id);
   }

   public updateOperative(operative: any): Observable<any>{
      console.log(operative);
      return this._operativeRepository.updateOperative();
   }

   public getOperativesStream(){
      return this.operative$.asObservable();
   }

}