import { ChangeDetectionStrategy, Component, inject, input, } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgIf } from '@angular/common';
import { IMenuItems } from '../../interfaces/menu-items.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
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
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public menuItems = input.required<IMenuItems[]>();
  public logoutItem = input.required<IMenuItems>();
  
  public bloodBankName = input<string>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );
}
