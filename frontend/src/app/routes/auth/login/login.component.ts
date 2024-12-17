import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { AuthService } from '../../../core/auth/presentation/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './form/form.component';
import { Router } from '@angular/router';
import { UserService } from '../../../core/user/presentation/user.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    FormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly userService = inject(UserService)
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  public login(data: any){
    this.authService.login(data.userName, data.password)
    .pipe(switchMap((resp) => this.userService.getWorker(resp.data.id)))
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: () => {
        console.log('Logged in')
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.router.navigateByUrl('/')
      }
    })
  }

}
