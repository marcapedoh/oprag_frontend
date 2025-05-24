import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.css']
})
export class UtilisateurFormComponent {
currentStep = 1;
  isChauffeurModal = true
  certificatControl: any = {}
  chauffeur: any = {}
  vehicule: any = {}
  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  openChauffeurModal() {
    this.isChauffeurModal = !this.isChauffeurModal;
  }

}
