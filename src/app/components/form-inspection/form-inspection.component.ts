import { Component } from '@angular/core';

@Component({
  selector: 'app-form-inspection',
  templateUrl: './form-inspection.component.html',
  styleUrls: ['./form-inspection.component.css']
})
export class FormInspectionComponent {

   currentStep = 1;
   isChauffeurModal=true
   certificatControl:any={}
   chauffeur:any={}
   vehicule:any={}
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

  openChauffeurModal(){
    this.isChauffeurModal=!this.isChauffeurModal;
  }
}
