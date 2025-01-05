import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OperativeService } from '../../../core/operatives/presentation/operative.service';
import { CreateOperativeParams } from '../../../core/operatives/domain/operative.model';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

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
    provideNativeDateAdapter(),
    DatePipe
  ]
})
export class AddOperativeComponent {
  private readonly dialogRef = inject(MatDialogRef<AddOperativeComponent>);
  private readonly operativeService = inject(OperativeService);
  private readonly fb = inject(FormBuilder);
  private readonly datePipe = inject(DatePipe)

  public addOperativeForm: FormGroup = this.fb.group({
    name: [],
    startDate: [],
    endDate: [],
    image: [],
    description: [],
    addressId: [],
  })

  
  addOperative(): void {
    if (!this.addOperativeForm.valid) return;
    
    const rawStartDate = this.addOperativeForm.get('startDate')?.value;
    const rawEndDate = this.addOperativeForm.get('endDate')?.value;
  
    if(!rawStartDate || !rawEndDate){
      console.error('Start date and end date are required');
      return;
    }
  
    // Format dates as ISO strings without milliseconds
    const startDate = new Date(rawStartDate).toISOString().split('.')[0] + 'Z';
    const endDate = new Date(rawEndDate).toISOString().split('.')[0] + 'Z';
  
    const operative: CreateOperativeParams = {
      name: this.addOperativeForm.get('name')?.value,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      image: this.addOperativeForm.get('image')?.value,
      description: this.addOperativeForm.get('description')?.value,
      addressId: 1,
      bloodBankId: 1,
      workerId: 1
    }
    console.log(operative)
  
    this.operativeService.createOperative(operative)
      .subscribe({
        next: (response) => {
          console.log('Operative created successfully:', response);
          this.dialogRef.close(operative);
        },
        error: (error) => {
          console.error('Error creating operative:', error);
          // Handle error appropriately (e.g., show error message)
        }
      });
  }
}
