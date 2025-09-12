import { Component, OnInit } from '@angular/core';
import { InspectionDataService } from 'src/app/services/inspection-data/inspection-data.service';

@Component({
  selector: 'app-fiche-control',
  templateUrl: './fiche-control.component.html',
  styleUrls: ['./fiche-control.component.css']
})
export class FicheControlComponent implements OnInit {
  formData: any;

  constructor(private inspectionDataService: InspectionDataService) { }

  ngOnInit(): void {
    this.formData = this.inspectionDataService.formData;
  }

  print() {
    window.print();
  }
}
