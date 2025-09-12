import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheControlComponent } from './fiche-control.component';

describe('FicheControlComponent', () => {
  let component: FicheControlComponent;
  let fixture: ComponentFixture<FicheControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheControlComponent]
    });
    fixture = TestBed.createComponent(FicheControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
