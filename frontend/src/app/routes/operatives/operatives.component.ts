import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OperativeService } from '../../core/operatives/presentation/operative.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-operatives',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './operatives.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperativesComponent {
  private readonly operativeService = inject(OperativeService);
  public operative$ = this.operativeService.getOperatives();
  
}
