import { Observable } from 'rxjs'
import { LoginApiResponse, LogoutApiResponse } from './account.model';

export interface AuthRepository {
   login(userName: string, password: string): Observable<LoginApiResponse>
   logout(): Observable<LogoutApiResponse>
}
