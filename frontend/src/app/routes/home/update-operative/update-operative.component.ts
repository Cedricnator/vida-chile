import { DialogModule } from '@angular/cdk/dialog';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-update-operative',
  standalone: true,
  imports: [
    DialogModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    OverlayModule
  ],
  templateUrl: './update-operative.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    Overlay
  ],
})
export class UpdateOperativeComponent {

}
