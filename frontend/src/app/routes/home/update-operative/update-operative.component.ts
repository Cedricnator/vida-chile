import { DialogModule } from '@angular/cdk/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { OperativeService } from '../../../core/operatives/presentation/operative.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OperativeModel } from '../../../core/operatives/domain/operative.model';

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
  private readonly data = inject<OperativeModel>(MAT_DIALOG_DATA);

  public updateOperativeForm: FormGroup = this.fb.group({
    name: [this.data.name],
    startDate: [this.data.startDate],
    endDate: [this.data.endDate],
    image: [this.data.image],
    description: [this.data.description],
    addressId: [1],
  })

  public updateOperative(): void {
    if (!this.updateOperativeForm.valid) return;
    const updatedOperative: OperativeModel = {
      ...this.data,
      ...this.updateOperativeForm.value
    };

    this.operativeService.updateOperative(updatedOperative).subscribe({
      next: () => this.dialogRef.close(),
      error: (error) => console.error('Error updating operative:', error)
    });
  }

}
