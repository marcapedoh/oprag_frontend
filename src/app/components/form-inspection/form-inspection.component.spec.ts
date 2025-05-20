import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInspectionComponent } from './form-inspection.component';

describe('FormInspectionComponent', () => {
  let component: FormInspectionComponent;
  let fixture: ComponentFixture<FormInspectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInspectionComponent]
    });
    fixture = TestBed.createComponent(FormInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
