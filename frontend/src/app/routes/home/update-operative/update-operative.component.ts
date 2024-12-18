import { DialogModule } from '@angular/cdk/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { OperativeService } from '../../../core/operatives/presentation/operative.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update-operative',
  standalone: true,
  imports: [
    DialogModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    OverlayModule,
    MatFormFieldModule
  ],
  templateUrl: './update-operative.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideNativeDateAdapter()
  ]
  
})
export class UpdateOperativeComponent {
  private readonly dialogRef = inject(MatDialogRef<UpdateOperativeComponent>);
  private readonly operativeService = inject(OperativeService);
  private readonly fb = inject(FormBuilder);

  public updateOperativeForm: FormGroup = this.fb.group({
    name: [],
    startDate: [],
    endDate: [],
    image: [],
    description: [],
    addressId: [],
  })

  public updateOperative(): void {
    if (!this.updateOperativeForm.valid) return;

  }

}
