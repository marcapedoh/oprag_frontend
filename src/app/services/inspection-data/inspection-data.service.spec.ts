import { TestBed } from '@angular/core/testing';

import { InspectionDataService } from '../inspection-data.service';

describe('InspectionDataService', () => {
  let service: InspectionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
