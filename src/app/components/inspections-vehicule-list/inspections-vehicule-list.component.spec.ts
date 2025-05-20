import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionsVehiculeListComponent } from './inspections-vehicule-list.component';

describe('InspectionsVehiculeListComponent', () => {
  let component: InspectionsVehiculeListComponent;
  let fixture: ComponentFixture<InspectionsVehiculeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionsVehiculeListComponent]
    });
    fixture = TestBed.createComponent(InspectionsVehiculeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
