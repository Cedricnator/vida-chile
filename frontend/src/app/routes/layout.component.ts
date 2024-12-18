import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../shared/ui/navigation/navigation.component';
import { MenuItem } from './menu-item.model';
import { BloodBankService } from '../core/bloodbank/presentation/bloodbank.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  template: `
    <navigation [menuItems]="menuItems()" [bloodBankName]="bloodBank()?.name" [logoutItem]="logoutItem()">
      <router-outlet />
    </navigation>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  private readonly bloodBankService = inject(BloodBankService);

  public bloodBank = toSignal(this.bloodBankService.getBloodBank(1));

  public menuItems = signal<MenuItem[]>([
    new MenuItem(
      'Inicio',
      'home',
      ''
    ),
    new MenuItem(
      'Operativos',
      'event',
      'operatives'
    ),
    new MenuItem(
      'Formularios',
      'description',
      'forms'
    ),
  ]).asReadonly()

  public logoutItem = signal<MenuItem>(
    new MenuItem(
      'Cerrar Sesión',
      'logout',
      '/auth/login'
    )
  )
}
