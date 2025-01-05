import { Injectable } from '@angular/core';
import { OperativeRepository } from '../domain/operative.repository';
import {  Observable, of, throwError } from 'rxjs';
import { CreateOperativeParams, OperativeModel } from '../domain/operative.model';

const operatives: OperativeModel[] = [
   {
      "id": 1,
      "name": "Operativo Temuco",
      "startDate": new Date(Date.now()),
      "endDate":   new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      "image": 'https://i.imgur.com/Ya0FS5k.jpeg',
      "description": "Segundo operativo en Temuco",
      "workerId": 1,
      "address": "Manuel Montt,Temuco",
      "bloodBankName": "Banco de Sangre Ufro"
   },
   {
      "id": 2,
      "name": "Operativo Loncoche",
      "startDate": new Date(Date.now()),
      "endDate":   new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      "image": 'https://i.imgur.com/oSNDtKB.jpeg',
      "description": "Primer operativo en loncoche",
      "workerId": 1,
      "address": "Manuel Montt, Loncoche",
      "bloodBankName": "Banco de Sangre Ufro"
   },
   {
      "id": 3,
      "name": "Operativo Tolten",
      "startDate": new Date(Date.now()),
      "endDate":   new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      "image": 'https://i.imgur.com/esHoHB1.jpeg',
      "description": "Primer operativo en Tolten",
      "workerId": 1,
      "address": "Manuel Montt, Tolten",
      "bloodBankName": "Banco de Sangre Ufro"
   },
   {
      "id": 4,
      "name": "Operativo Padre las Casas",
      "startDate": new Date(Date.now()),
      "endDate":   new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      "image": 'https://i.imgur.com/2d6X1jM.jpeg',
      "description": "Primer operativo en Tolten",
      "workerId": 1,
      "address": "Arturo Pratt, Temuco",
      "bloodBankName": "Banco de Sangre Ufro"
   },
]

@Injectable()
export class OperativeMockService implements OperativeRepository {
   public createOperative(params: CreateOperativeParams): Observable<any> {
      const newOperative: OperativeModel = {
         id: operatives.length + 1,
         name: params.name,
         address: 'Manuel Montt',
         bloodBankName: 'Banco de Sangre Ufro',
         description: params.description,
         startDate: params.startDate,
         endDate: params.endDate,
         image: params.image,
         workerId: params.workerId,
      }
      operatives.push(newOperative);
      return of(newOperative);
   }
   
   public getOperatives(): Observable<OperativeModel[]> {
      return of(operatives);
   }

   public getOperative(id: number): Observable<OperativeModel> {
      const operative = operatives.find( operative => operative.id === id);
      if (!operative){
         throw new Error("Operative not founded")
      }
      return of(operative)
   }
   
   public deleteOperative(id: number): Observable<any> {
      const index = operatives.findIndex(operative => operative.id === id);

      if (index === -1){
         return throwError(() => new Error(`Operative with id: ${id} not founded`));
      }

      operatives.splice(index, 1)
      return of(true);
   }
   
   public updateOperative(): Observable<any> {
      throw new Error('Method not implemented.');
   }
   
}