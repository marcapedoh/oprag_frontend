import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheQrViewComponent } from './fiche-qr-view.component';

describe('FicheQrViewComponent', () => {
  let component: FicheQrViewComponent;
  let fixture: ComponentFixture<FicheQrViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheQrViewComponent]
    });
    fixture = TestBed.createComponent(FicheQrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
