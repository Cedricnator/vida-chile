import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthService } from '../core/auth/presentation/auth.service';
import { Worker } from '../core/auth/domain/account.model'

export interface UserLogin {
   id: number;
   username: string;
   worker: null|Worker
}

interface UserState {
   loading: boolean;
   user:  UserLogin | undefined;
   error: string | null;
}

@Injectable({providedIn: 'root'})
export class AuthStoreService {
   private readonly authService = inject(AuthService);

   private initalState = signal<UserState>({
      loading: false,
      user: undefined,
      error: null,
   })

   public isLoading = computed(() => this.initalState().loading);
   public user = computed(() => this.initalState().user);
   public error = computed(() => this.initalState().error);

   private setLoading(isLoading: boolean) {
      this.initalState.update(( state ) => ({
         ...state,
         loading: isLoading,
      }));
   }

   private setError(error: string) {
      this.initalState.update(( state ) => ({
         ...state,
         error,
      }));
   }

   private setUser(user: UserLogin) {
      this.initalState.update(( state ) => ({
         ...state,
         user,
      }));
   }

   public login(userName: string, password: string) {
      this.setLoading(true);
      this.authService.login(userName, password)
      .subscribe({
         next: (resp) => {
            const user = {
               id: resp.data.id,
               username: resp.data.username,
               worker: resp.data.worker
            }
            this.setUser(user);
            this.setLoading(false);
         },
         error: (error) => {
            this.setError(error);
            this.setLoading(false);
         }
      });
   }
   
}