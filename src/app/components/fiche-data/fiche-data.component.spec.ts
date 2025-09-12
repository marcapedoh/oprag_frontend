import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDataComponent } from './fiche-data.component';

describe('FicheDataComponent', () => {
  let component: FicheDataComponent;
  let fixture: ComponentFixture<FicheDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheDataComponent]
    });
    fixture = TestBed.createComponent(FicheDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
