import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OperativeService } from '../../../core/operatives/presentation/operative.service';
import { CreateOperativeParams } from '../../../core/operatives/domain/operative.model';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { DialogRef } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-operative',
  standalone: true,
  imports: [
    MatDialogModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './add-operative.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideNativeDateAdapter()
  ]
})
export class AddOperativeComponent {
  private readonly dialogRef = inject(MatDialogRef<AddOperativeComponent>);
  private readonly operativeService = inject(OperativeService);
  private readonly fb = inject(FormBuilder);

  public addOperativeForm: FormGroup = this.fb.group({
    name: [],
    startDate: [],
    endDate: [],
    image: [],
    description: [],
    addressId: [],
  })

  addOperative() {
    if (!this.addOperativeForm.valid) return;
    const operative: CreateOperativeParams = {
      name: this.addOperativeForm.get('name')?.value,
      startDate: this.addOperativeForm.get('startDate')?.value,
      endDate: this.addOperativeForm.get('endDate')?.value,
      image: this.addOperativeForm.get('image')?.value,
      description: this.addOperativeForm.get('description')?.value,
      addressId: this.addOperativeForm.get('addressId')?.value,
      bloodBankId: 1,
      workerId: 1
    }
    this.operativeService.createOperative(operative);
    this.dialogRef.close(operative);
  }
}
