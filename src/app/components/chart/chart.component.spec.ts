import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsComponent]
    });
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
