import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OperativeService } from '../../core/operatives/presentation/operative.service';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddOperativeComponent } from '../home/add-operative/add-operative.component';

@Component({
  selector: 'app-operatives',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './operatives.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperativesComponent {
  private readonly operativeService = inject(OperativeService);
  private readonly dialog = inject(MatDialog);
  public operative$ = this.operativeService.getOperatives();
  

  createOperative(){
    this.dialog.open(AddOperativeComponent, {
      height: '80%',
      width: '80%',
      exitAnimationDuration: '350ms',
      enterAnimationDuration: '350ms'
    });
  }
  
}
