import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalPartenersComponent } from './technical-parteners.component';

describe('TechnicalPartenersComponent', () => {
  let component: TechnicalPartenersComponent;
  let fixture: ComponentFixture<TechnicalPartenersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalPartenersComponent]
    });
    fixture = TestBed.createComponent(TechnicalPartenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
