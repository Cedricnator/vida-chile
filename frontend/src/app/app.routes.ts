import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: 'auth',
      loadComponent: () => import('./routes/auth/layout.component').then(C => C.LayoutComponent),
      children: [
         {
            path: 'login',
            loadComponent: () => import('./routes/auth/login/login.component').then(C => C.LoginComponent)
         },
         {
            path: '**',
            redirectTo: 'login',
            pathMatch: 'full'
         }
      ]
   },
   {
      path: '',
      loadComponent: () => import('./routes/layout.component').then(C => C.LayoutComponent),
      children: [
         {
            path: '',
            loadComponent: () => import('./routes/home/home.component').then(C => C.HomeComponent)
         },
         {
            path: 'forms',
            loadComponent: () => import('./routes/form/form.component').then(C => C.FormComponent)
         },
         {
            path: 'operatives',
            loadComponent: () => import('./routes/operatives/operatives.component').then(C => C.OperativesComponent)
         },
         {
            path: '**',
            redirectTo: '',
            pathMatch: 'full'
         }
      ]
   },
   {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full'
   }
];
