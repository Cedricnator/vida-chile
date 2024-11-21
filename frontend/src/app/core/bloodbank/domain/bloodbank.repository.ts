import { Observable } from "rxjs";
import { getBloodBankResponse } from "./bloodbank.model";

export interface BloodBankRepository {
   getBloodBank(id: number): Observable<getBloodBankResponse>
}