import { AfterViewInit, ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OperativeService } from '../../core/operatives/presentation/operative.service';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddOperativeComponent } from './add-operative/add-operative.component';
import { OperativeModel } from '../../core/operatives/domain/operative.model';
import { UpdateOperativeComponent } from './update-operative/update-operative.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    DatePipe,
    MatButtonModule   
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent implements AfterViewInit {
  private readonly operativeService = inject(OperativeService);
  private readonly dialog = inject(MatDialog);

  constructor(){
    this.operativeService.getOperatives().subscribe();
  }

  public operative$ = toSignal(this.operativeService.getOperativesStream(), { initialValue: [] });
  
  displayedColumns: string[] = ['position', 'name', 'address', 'startDate', 'endDate', 'actions'];
  dataSource = new MatTableDataSource<OperativeModel>(this.operative$());

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  operativeIndicator(operatives: OperativeModel[]){
    const today = new Date();

    return operatives.filter(operative => {
      const endDate = new Date(operative.endDate);
      return endDate > today;
    }).length;
  }

  addOperative() {
    this.dialog.open(AddOperativeComponent, {
      height: '80%',
      width: '80%',
      exitAnimationDuration: '350ms',
      enterAnimationDuration: '350ms'
    });

    // dialogRef.afterClosed().subscribe({
    //   next: (result) => console.log(result),
    //   error: (err) => console.error(err),
    // })
  }

  updateOperative(operative: OperativeModel) {
    this.dialog.open(UpdateOperativeComponent, {
      height: '80%',
      width: '80%',
      data: operative,
      exitAnimationDuration: '350ms',
      enterAnimationDuration: '350ms'
    })
  }

  deleteOperative(id: number) {
    this.operativeService.deleteOperative(id)
  }
}
