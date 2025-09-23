import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePreviewComponent } from './fiche-preview.component';

describe('FichePreviewComponent', () => {
  let component: FichePreviewComponent;
  let fixture: ComponentFixture<FichePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichePreviewComponent]
    });
    fixture = TestBed.createComponent(FichePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
