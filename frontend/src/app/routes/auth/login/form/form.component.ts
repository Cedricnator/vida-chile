import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './form.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  private readonly fb = inject(FormBuilder);
  public sendForm = output();

  public loginForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  public onLogin(){
    if(!this.loginForm.valid) return;
    this.sendForm.emit(this.loginForm.value);
  }
}
