import { computed, inject, Injectable, signal } from '@angular/core';
import { AuthService } from '../core/auth/presentation/auth.service';

@Injectable({providedIn: 'root'})
export class AuthStoreService {
   private readonly authService = inject(AuthService);

   private initalState = signal({
      loading: false,
      user: undefined,
      error: null,
   })

   public isLoading = computed(() => this.initalState().loading);
   public user = computed(() => this.initalState().user);
   public error = computed(() => this.initalState().error);
   
}