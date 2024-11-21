import { Observable } from 'rxjs'

export interface AuthRepository {
   login(): Observable<any>
   logout(): Observable<any>
}
