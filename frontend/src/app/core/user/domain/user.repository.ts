import { Observable } from "rxjs";
import { UserModel } from "./user.model";

export interface UserRepository {
   getWorkerById(id: number): Observable<UserModel>
}