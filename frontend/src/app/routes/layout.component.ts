import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../shared/ui/navigation/navigation.component';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  template: `
    <navigation [menuItems]="menuItems()">
      <router-outlet />
    </navigation>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  public menuItems = signal<MenuItem[]>([
    new MenuItem(
      'Inicio',
      'home',
      ''
    ),
    new MenuItem(
      'Operativos',
      'location_away',
      'operatives'
    ),
    new MenuItem(
      'Formularios',
      'description',
      'forms'
    ),
    new MenuItem(
      'Cerrar Sesión',
      'logout',
      '/auth/login'
    )
  ]).asReadonly()
}
