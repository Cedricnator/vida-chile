import { computed, signal } from '@angular/core';

export interface BaseStateModel {
   loading: boolean;
   error:   string|null;
}

export class BaseState<T extends BaseStateModel> {
   protected state = signal<T>({
      loading: false,
      error:   null,
   } as T)

   public isLoading    = computed(() => this.state().loading);
   public errorMessage = computed(() => this.state().error);

   /**
    * Sets the loading indicator state.
    * @param isLoading - A boolean indicating whether the loading indicator should be shown (true) or hidden (false).
    * @returns The updated state with the new loading indicator value.
    */
   protected setLoadingIndicator(isLoading: boolean) {
      return this.state.update((state) => ({
         ...state,
         loading: isLoading,
      }));
   }

   /**
    * Sets an error message in the state.
    * @param errorMessage - The error message to be set in the state.
    * @returns The updated state with the new error message.
    */
   protected setError(errorMessage: string) {
      return this.state.update((state) => ({
         ...state,
         error: errorMessage,
      }));
   }
}