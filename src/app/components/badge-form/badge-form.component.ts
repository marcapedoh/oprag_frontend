import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.css']
})
export class BadgeFormComponent {
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
