import { Observable } from "rxjs";

export interface FormRepository {
   getForms(): Observable<any>
}