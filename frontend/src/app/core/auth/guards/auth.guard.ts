import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStoreService, UserLogin } from '../../../store/auth.store';

export const authGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStoreService);

  const router = inject(Router);
  const currentUser: UserLogin | undefined = authStore.user()

  if( currentUser?.worker ){
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }
};
