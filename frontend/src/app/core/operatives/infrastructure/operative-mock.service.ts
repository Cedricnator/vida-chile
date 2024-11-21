import { Injectable } from '@angular/core';
import { OperativeRepository } from '../domain/operative.repository';
import { Observable } from 'rxjs';

@Injectable()
export class OperativeMockService implements OperativeRepository {

   createOperative(): Observable<any> {
      throw new Error('Method not implemented.');
   }
   
   getOperatives(): Observable<any> {
      const operatives = [
         {}
      ]

      throw new Error('Method not implemented.');
   }
   
   deleteOperative(): Observable<any> {
      throw new Error('Method not implemented.');
   }
   
   updateOperative(): Observable<any> {
      throw new Error('Method not implemented.');
   }
   
}