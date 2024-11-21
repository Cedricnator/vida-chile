import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../presentation/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const router = inject(Router);
  const currentUser: any = authService.getCurrentUser();

  if( currentUser?.role === 'worker'){
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }
  
};
