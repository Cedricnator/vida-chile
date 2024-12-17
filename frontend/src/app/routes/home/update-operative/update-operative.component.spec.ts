import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOperativeComponent } from './update-operative.component';

describe('UpdateOperativeComponent', () => {
  let component: UpdateOperativeComponent;
  let fixture: ComponentFixture<UpdateOperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOperativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
