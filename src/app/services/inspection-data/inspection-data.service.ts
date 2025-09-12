import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InspectionDataService {
  public formData: any = {
    documents: {},
    blockingPoints: [],
    nonBlockingPoints: [],
    avis: ''
  };

  constructor() { }
}
