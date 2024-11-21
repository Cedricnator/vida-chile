import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { MenuItems } from '../../interfaces/menu-items.interface';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public menuItems = signal<MenuItems[]>([
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
  ]).asReadonly()
}
