import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativesComponent } from './operatives.component';

describe('OperativesComponent', () => {
  let component: OperativesComponent;
  let fixture: ComponentFixture<OperativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperativesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
