import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUpdatedComponent } from './patient-updated.component';

describe('PatientUpdatedComponent', () => {
  let component: PatientUpdatedComponent;
  let fixture: ComponentFixture<PatientUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientUpdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
