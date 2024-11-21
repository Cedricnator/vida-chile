import { computed, inject, Injectable } from '@angular/core';
import { BaseState, BaseStateModel } from './0base.store';
import { UserService } from '../core/user/presentation/user.service';

interface AuthState extends BaseStateModel {
   user: any
}

@Injectable({
   providedIn: 'root'
})
export class UserStoreService extends BaseState<AuthState> {
   private readonly _userService = inject(UserService);
   
   constructor() {
      super()
      this.loadState()
   }
   
   private loadState(){
      this.state.update((state) => ({
         ...state,
         user: undefined
      }));
   }

   private setUser(user: any){
      this.state.update((state) => ({
         ...state,
         user: user
      }));
   }

   public getUser(id: number){
      this.setLoadingIndicator(true);
      this._userService.getWorker(id).subscribe({
         next: (user) => {
            this.setUser(user);
         },
         error: (err) => {
            this.setError(err);
         },
         complete: () => {
            this.setLoadingIndicator(false);
         }
      })
   }

   public getCurrentUser = computed(() => this.state().user );
   
}