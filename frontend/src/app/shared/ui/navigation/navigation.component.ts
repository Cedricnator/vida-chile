import { Component, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [
    MatToolbar,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    NgIf
  ]
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public menuItems = signal([
    {
      label: 'Inicio',
      icon:  'home',
      path:  ''
    },
    {
      label: 'Operativos',
      icon:  'location_away',
      path:  'operatives'
    },
    {
      label: 'Formularios',
      icon:  'description',
      path:  'forms'
    },
    {
      label: 'Cerrar Sesión',
      icon:  'logout',
      path:  '/auth/login'
    }
  ])

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
