import { Observable } from "rxjs";

export interface OperativeRepository {
   createOperative(): Observable<any>
   getOperatives():   Observable<any>
   deleteOperative(id: number): Observable<any>
   updateOperative(): Observable<any>
}