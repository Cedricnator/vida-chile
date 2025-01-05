import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../shared/ui/navigation/navigation.component';
import { MenuItem } from './menu-item.model';
import { BloodBankService } from '../core/bloodbank/presentation/bloodbank.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../core/auth/presentation/auth.service';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  template: `
    <navigation 
      [menuItems]="menuItems()" 
      [bloodBankName]="" 
      [logoutItem]="logoutItem()" 
      (logoutEvent)="logout()"
    >
      <router-outlet />
    </navigation>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  private readonly authService = inject(AuthService);
  //private readonly bloodBankService = inject(BloodBankService);
  //public bloodBank = toSignal(this.bloodBankService.getBloodBank(1));

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
  ]).asReadonly()

  public logoutItem = signal<MenuItem>(
    new MenuItem(
      'Cerrar Sesión',
      'logout',
      '/auth/login'
    )
  )

  logout(){
    this.authService
      .logout()
      .subscribe({
        next: (resp) => {
          console.log(resp)
        },
        error: (err) => {
          console.error(err)
        }
      })
  }
}
