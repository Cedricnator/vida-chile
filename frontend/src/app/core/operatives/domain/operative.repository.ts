import { Observable } from "rxjs";
import { CreateOperativeParams, OperativeModel } from "./operative.model";

export abstract class OperativeRepository {
   abstract createOperative(params: CreateOperativeParams): Observable<any>
   abstract getOperative(id: number): Observable<OperativeModel>
   abstract getOperatives():   Observable<OperativeModel[]>
   abstract deleteOperative(id: number): Observable<any>
   abstract updateOperative(): Observable<any>
}