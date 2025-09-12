import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InspectionDataService } from 'src/app/services/inspection-data/inspection-data.service';

interface CheckListItem {
  label: string;
  value: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-fiche-data',
  templateUrl: './fiche-data.component.html',
  styleUrls: ['./fiche-data.component.css']
})
export class FicheDataComponent {
  step = 1;
  formData: any = {
    rapport_id: 'CFHP-RP-013',
    date: new Date().toISOString().split('T')[0],
    documents: {},
  };

  blockingPoints: CheckListItem[] = [
    { label: 'Assurance', value: '' },
    { label: 'Visite Technique', value: '' },
    { label: 'Carte Grise', value: '' },
    { label: 'Extincteur', value: '' },
    { label: 'EPI', value: '' },
    { label: 'Phares', value: '' },
    { label: 'Clignotants AV/ARR', value: '' },
    { label: 'Feux Gabarit', value: '' },
    { label: 'Feux arrière / Feux Stop', value: '' },
    { label: 'Bip de recul', value: '' },
    { label: 'Roues, Jantes et leurs Fixations', value: '' },
    { label: 'Klaxon', value: '' },
    { label: 'Rétroviseurs', value: '' },
    { label: 'État de la Benne / Plateau', value: '' },
    { label: "Main d'accouplement", value: '' },
    { label: 'Diagnostic pannes électroniques', value: '' },
    { label: 'Tolérance usure', value: '' },
    { label: 'Système de charge batterie', value: '' },
    { label: 'Essai freinage', value: '' },
    { label: 'Fonctionnement manomètre de pression', value: '' },
    { label: 'Flexibles de freinage', value: '' },
    { label: 'Suspension', value: '' },
    { label: 'Amortisseurs', value: '' },
    { label: 'Bavette Arrière / Couvre roue', value: '' },
    { label: "État des bonbonnes d'air", value: '' }
  ];

  nonBlockingPoints: CheckListItem[] = [
    { label: "Plaques d'immatriculation", value: '' },
    { label: 'Trousse premier secours', value: '' },
    { label: 'Feux de détresses', value: '' },
    { label: 'Gyrophares', value: '' },
    { label: 'Essuie-Glaces', value: '' },
    { label: 'Ceinture de Sécurité', value: '' },
    { label: 'Coupe batterie', value: '' },
    { label: 'Carrosserie', value: '' },
    { label: 'Cabine / habitacle', value: '' },
    { label: 'Pneu et Pneu de secours', value: '' }
  ];

  avis: string = '';

  constructor(
    private router: Router,
    private inspectionDataService: InspectionDataService
  ) { }

  nextStep() {
    this.step++;
  }

  previousStep() {
    this.step--;
  }

  onCheckboxChange(item: CheckListItem, value: string) {
    if (item.value === value) {
      item.value = '';
    } else {
      item.value = value;
    }
  }

  addRow(tableType: 'blocking' | 'non-blocking') {
    const newItem: CheckListItem = { label: '', value: '', isNew: true };
    if (tableType === 'blocking') {
      this.blockingPoints = [...this.blockingPoints, newItem];
    } else {
      this.nonBlockingPoints = [...this.nonBlockingPoints, newItem];
    }
  }

  onSubmit() {
    this.inspectionDataService.formData = this.formData;
    this.inspectionDataService.formData.blockingPoints = this.blockingPoints;
    this.inspectionDataService.formData.nonBlockingPoints = this.nonBlockingPoints;
    this.inspectionDataService.formData.avis = this.avis;
    this.router.navigate(['/fiche']);
  }
}
