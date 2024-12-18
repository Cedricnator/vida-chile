import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  private matIconReg = inject(MatIconRegistry);
  
  title = 'frontend';
  
  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-icons-outlined');
  }
}
