import { inject, Injectable } from '@angular/core';
import { BaseState, BaseStateModel } from './0base.store';
import { OperativeService } from '../core/operatives/presentation/operative.service';

interface OperativeState extends BaseStateModel {
   operatives: any
}

@Injectable({
   providedIn: 'root'
})
export class OperativeStoreService extends BaseState<OperativeState>{
   private readonly _operativeService = inject(OperativeService)

   constructor(){
      super()
      this.loadState()
   }

   private loadState(){
      this.state.update((state) => ({
         ...state,
         operatives: []
      }))
   }
   
   private setOperatives(operatives: any){
      this.state.update((state) => ({
         ...state,
         operatives: operatives
      }))
   }

   public getOperatives(){
      this.setLoadingIndicator(true);
      this._operativeService.getOperatives().subscribe({
         next: (operatives) => {
            this.setOperatives(operatives);
         },
         error: (err) => {
            this.setError(err);
         },
         complete: () => {
            this.setLoadingIndicator(false);
         }
      })
   }
}