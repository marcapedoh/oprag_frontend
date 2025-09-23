import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-fiche-preview',
  templateUrl: './fiche-preview.component.html',
  styleUrls: ['./fiche-preview.component.css']
})
export class FichePreviewComponent implements OnInit {
  @Input() inspectionData: any;
  @Output() close = new EventEmitter<void>();

  currentPage: number = 1;
  totalPages: number = 2;

  page1Html: SafeHtml;
  page2Html: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.page1Html = this.sanitizer.bypassSecurityTrustHtml(this.getPage1Html());
    this.page2Html = this.sanitizer.bypassSecurityTrustHtml(this.getPage2Html());
  }

  ngOnInit(): void {
    if (this.inspectionData) {
      this.updateHtmlWithData();
    }
  }

  private updateHtmlWithData(): void {
    // Mise à jour dynamique des données dans le HTML
    // À implémenter selon les besoins spécifiques
  }

  private getPage1Html(): string {
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Fiche d'Inspection OPRAG</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <style type="text/css">
    a {text-decoration: none}
    body { margin: 0; padding: 0; font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; }
    table { border-collapse: collapse; empty-cells: show; }
    .jrPage { background-color: white; width: 595px; }
    .border-black { border: 1px solid #000000; }
    .bg-gray { background-color: #D9D9D9; }
    .bg-light-gray { background-color: #F0F0F0; }
    .text-center { text-align: center; }
    .text-left { text-align: left; }
    .text-small { font-size: 7px; }
    .text-normal { font-size: 9px; }
    .text-medium { font-size: 10px; }
    .text-large { font-size: 11px; }
    .text-xlarge { font-size: 12px; }
    .text-xxlarge { font-size: 14px; }
    .font-bold { font-weight: bold; }
    .font-italic { font-style: italic; }
    .underline { text-decoration: underline; }
    .p-2 { padding: 2px; }
    .p-4 { padding: 4px; }
  </style>
</head>
<body text="#000000" link="#000000" alink="#000000" vlink="#000000">
<div class="jrPage mx-auto">
  <!-- Espacement supérieur -->
  <div style="height: 30px;"></div>

  <!-- Logos -->
  <table width="100%">
    <tr>
      <td width="50"></td>
      <td width="60" class="text-center">
        <div style="height: 49px; display: flex; align-items: center; justify-content: center;">
          <span class="text-large font-bold">LOGO OPRAG</span>
        </div>
      </td>
      <td width="436"></td>
      <td width="49" class="text-center">
        <div style="height: 49px; display: flex; align-items: center; justify-content: center;">
          <span class="text-large font-bold">LOGO PARTENAIRE</span>
        </div>
      </td>
    </tr>
  </table>

  <!-- Ligne de séparation -->
  <div style="height: 3px;"></div>
  <div style="border-top: 2px solid #000000; margin: 0 30px;"></div>
  <div style="height: 7px;"></div>

  <!-- Titre principal -->
  <table width="100%">
    <tr>
      <td width="97"></td>
      <td class="border-black text-center p-2">
        <span class="text-xxlarge font-bold">FICHE D'INSPECTION CAMIONNAGE OPRAG</span>
      </td>
    </tr>
  </table>

  <div style="height: 9px;"></div>

  <!-- Informations générales -->
  <table width="100%">
    <!-- Ligne 1: N° rapport et Date -->
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">N° de rapport:</span>
        </div>
      </td>
      <td width="100" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.numeroRapport || 'INSP-001'}</span>
      </td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">Date de contrôle:</span>
        </div>
      </td>
      <td width="100" class="border-black p-2">
        <span class="text-medium">${this.formatDate(this.inspectionData?.dateControle)}</span>
      </td>
    </tr>

    <!-- Ligne 2: Société -->
    <tr><td style="height: 5px;" colspan="5"></td></tr>
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">Société / Entreprise:</span>
        </div>
      </td>
      <td colspan="3" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.societe || 'Transports ABC'}</span>
      </td>
    </tr>

    <!-- Ligne 3: Localisation -->
    <tr><td style="height: 5px;" colspan="5"></td></tr>
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">Localisation:</span>
        </div>
      </td>
      <td colspan="3" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.localisation || 'Port OPRAG'}</span>
      </td>
    </tr>

    <!-- Ligne 4: Immatriculation -->
    <tr><td style="height: 5px;" colspan="5"></td></tr>
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">N° d'immatriculation:</span>
        </div>
      </td>
      <td colspan="3" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.immatriculation || 'AB-123-CD'}</span>
      </td>
    </tr>

    <!-- Ligne 5: Numéro de série -->
    <tr><td style="height: 5px;" colspan="5"></td></tr>
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">N° de série:</span>
        </div>
      </td>
      <td colspan="3" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.numeroSerie || 'SN-789456'}</span>
      </td>
    </tr>
  </table>

  <div style="height: 10px;"></div>

  <!-- Documents présentés -->
  <table width="100%">
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black" style="height: 60px; display: flex; align-items: center; padding: 2px;">
          <span class="text-medium font-bold">Documents présentés:</span>
        </div>
      </td>
      <td class="border-black p-2" style="height: 60px;">
        <span class="text-medium">${this.inspectionData?.documents || 'Carte grise, Assurance, Visite technique'}</span>
      </td>
    </tr>
  </table>

  <!-- Déclaration -->
  <table width="100%">
    <tr>
      <td width="30"></td>
      <td class="border-black p-2">
        <span class="text-small font-italic">Déclaration (écrite) du chef d'établissement, des travaux prévus d'être effectué par l'équipement de transport contrôlé (pour l'assistance d'examen d'adéquation) :</span>
      </td>
    </tr>
  </table>

  <div style="height: 10px;"></div>

  <!-- Informations supplémentaires -->
  <table width="100%">
    <!-- Moyen d'accès et Partiel -->
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">Moyen d'accès:</span>
        </div>
      </td>
      <td width="100" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.moyenAcces || 'Accès direct'}</span>
      </td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">Partiel:</span>
        </div>
      </td>
      <td width="100" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.partiel || 'Non'}</span>
      </td>
    </tr>

    <!-- Conducteur et Norme -->
    <tr><td style="height: 5px;" colspan="5"></td></tr>
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">Conducteur:</span>
        </div>
      </td>
      <td width="100" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.conducteur || 'Jean Dupont'}</span>
      </td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">Norme de fabrication:</span>
        </div>
      </td>
      <td width="100" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.normeFabrication || 'ISO 9001'}</span>
      </td>
    </tr>

    <!-- Motif de contrôle -->
    <tr><td style="height: 5px;" colspan="5"></td></tr>
    <tr>
      <td width="30"></td>
      <td width="129">
        <div class="bg-gray border-black p-2">
          <span class="text-medium font-bold">Motif de contrôle:</span>
        </div>
      </td>
      <td colspan="3" class="border-black p-2">
        <span class="text-medium">${this.inspectionData?.motifControle || 'Inspection périodique'}</span>
      </td>
    </tr>
  </table>

  <div style="height: 10px;"></div>

  <!-- Points de contrôle -->
  <div class="text-center">
    <span class="text-xxlarge font-bold underline">POINTS DE CONTRÔLE</span>
  </div>

  <div style="height: 10px;"></div>

  <!-- Tableau des points de contrôle -->
  <table width="100%">
    <!-- En-tête du tableau -->
    <tr>
      <td width="30"></td>
      <td width="180" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">Points de contrôle</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-normal font-bold">C</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-normal font-bold">N.C</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-normal font-bold">B.E</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-normal font-bold">M.E</span>
      </td>
      <td width="20"></td>
      <!-- Deuxième colonne -->
      <td width="180" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">Points de contrôle</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">C</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">N.C</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">B.E</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">M.E</span>
      </td>
    </tr>

    <!-- Points de contrôle - Ligne 1 -->
    <tr>
      <td width="30"></td>
      <td class="border-black p-2">
        <span class="text-normal">Roues, Jantes et leurs Fixations</span>
      </td>
      <td class="border-black text-center">${this.getCheckbox('C', 'Roues, Jantes et leurs Fixations')}</td>
      <td class="border-black text-center">${this.getCheckbox('NC', 'Roues, Jantes et leurs Fixations')}</td>
      <td class="border-black text-center">${this.getCheckbox('BE', 'Roues, Jantes et leurs Fixations')}</td>
      <td class="border-black text-center">${this.getCheckbox('ME', 'Roues, Jantes et leurs Fixations')}</td>
      <td width="20"></td>
      <td class="border-black p-2">
        <span class="text-normal">Rétroviseurs</span>
      </td>
      <td class="border-black text-center">${this.getCheckbox('C', 'Rétroviseurs')}</td>
      <td class="border-black text-center">${this.getCheckbox('NC', 'Rétroviseurs')}</td>
      <td class="border-black text-center">${this.getCheckbox('BE', 'Rétroviseurs')}</td>
      <td class="border-black text-center">${this.getCheckbox('ME', 'Rétroviseurs')}</td>
    </tr>

    <!-- Continuer avec les autres points de contrôle... -->

  </table>

  <!-- Pied de page -->
  <div style="height: 20px;"></div>
  <table width="100%">
    <tr>
      <td width="30"></td>
      <td>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-blue-100 rounded flex items-center justify-center mr-2">
            <span class="text-blue-600 font-bold text-lg">CFHP</span>
          </div>
          <div class="text-xlarge font-bold">PARTENAIRES TECHNIQUES</div>
        </div>
      </td>
      <td width="100" class="text-right">
        <div class="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
          <span class="text-gray-600 text-xs">LOGO</span>
        </div>
      </td>
    </tr>
  </table>
</div>
</body>
</html>
    `;
  }

  private getPage2Html(): string {
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Fiche d'Inspection OPRAG - Page 2</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <style type="text/css">
    a {text-decoration: none}
    body { margin: 0; padding: 0; font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif; }
    table { border-collapse: collapse; empty-cells: show; }
    .jrPage { background-color: white; width: 595px; }
    .border-black { border: 1px solid #000000; }
    .bg-gray { background-color: #D9D9D9; }
    .bg-light-gray { background-color: #FCFCFC; }
    .text-center { text-align: center; }
    .text-left { text-align: left; }
    .text-small { font-size: 7px; }
    .text-normal { font-size: 9px; }
    .text-medium { font-size: 10px; }
    .text-large { font-size: 11px; }
    .font-bold { font-weight: bold; }
    .underline { text-decoration: underline; }
    .p-2 { padding: 2px; }
  </style>
</head>
<body text="#000000" link="#000000" alink="#000000" vlink="#000000">
<div class="jrPage mx-auto">
  <!-- Espacement supérieur -->
  <div style="height: 40px;"></div>

  <!-- Points de contrôle suite -->
  <table width="100%">
    <!-- En-tête -->
    <tr>
      <td width="30"></td>
      <td width="180" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">Points de contrôle</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-normal font-bold">C</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-normal font-bold">N.C</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-normal font-bold">B.E</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-normal font-bold">M.E</span>
      </td>
      <td width="20"></td>
      <td width="180" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">Points de contrôle</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">C</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">N.C</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">B.E</span>
      </td>
      <td width="20" class="bg-gray border-black text-center p-2">
        <span class="text-medium font-bold">M.E</span>
      </td>
    </tr>

    <!-- Points de contrôle supplémentaires... -->
    <tr>
      <td width="30"></td>
      <td class="border-black p-2">
        <span class="text-normal">Clignotants AV/ARR</span>
      </td>
      <td class="border-black text-center">${this.getCheckbox('C', 'Clignotants AV/ARR')}</td>
      <td class="border-black text-center">${this.getCheckbox('NC', 'Clignotants AV/ARR')}</td>
      <td class="border-black text-center">${this.getCheckbox('BE', 'Clignotants AV/ARR')}</td>
      <td class="border-black text-center">${this.getCheckbox('ME', 'Clignotants AV/ARR')}</td>
      <td width="20"></td>
      <td class="border-black p-2">
        <span class="text-normal">Ceinture de Sécurité</span>
      </td>
      <td class="border-black text-center">${this.getCheckbox('C', 'Ceinture de Sécurité')}</td>
      <td class="border-black text-center">${this.getCheckbox('NC', 'Ceinture de Sécurité')}</td>
      <td class="border-black text-center">${this.getCheckbox('BE', 'Ceinture de Sécurité')}</td>
      <td class="border-black text-center">${this.getCheckbox('ME', 'Ceinture de Sécurité')}</td>
    </tr>

    <!-- Continuer avec les autres points... -->
  </table>

  <div style="height: 26px;"></div>

  <!-- Légende -->
  <div class="bg-light-gray border-black p-4">
    <span class="text-large font-bold underline">Légende:</span>
    <div style="height: 5px;"></div>
    <table width="100%">
      <tr>
        <td width="100">
          <span class="text-medium font-bold">C= Conforme</span>
        </td>
        <td width="180"></td>
        <td width="100">
          <span class="text-medium font-bold">N.C= Non Conforme</span>
        </td>
      </tr>
      <tr><td style="height: 5px;" colspan="3"></td></tr>
      <tr>
        <td width="100">
          <span class="text-medium font-bold">B.E= Bon état</span>
        </td>
        <td width="180"></td>
        <td width="100">
          <span class="text-medium font-bold">M.E= Mauvais état</span>
        </td>
      </tr>
    </table>
  </div>

  <div style="height: 20px;"></div>

  <!-- Observations et Avis -->
  <div class="bg-light-gray border-black p-4">
    <table width="100%">
      <tr>
        <td width="100">
          <span class="text-large font-bold underline">OBSERVATIONS:</span>
        </td>
        <td width="258"></td>
        <td width="76" class="text-center">
          <span class="text-large font-bold underline">Avis:</span>
        </td>
      </tr>
      <tr><td style="height: 5px;" colspan="3"></td></tr>
      <tr>
        <td rowspan="4" class="border-black" style="height: 80px; vertical-align: top; padding: 2px;">
          <span class="text-medium">${this.inspectionData?.observations || 'Véhicule en bon état général'}</span>
        </td>
        <td></td>
        <td>
          <div class="flex items-center">
            <div class="w-4 h-4 border border-black mr-2 ${this.inspectionData?.avis === 'Favorable' ? 'bg-green-500' : ''}"></div>
            <span class="text-medium font-bold">Favorable</span>
          </div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <div class="flex items-center">
            <div class="w-4 h-4 border border-black mr-2 ${this.inspectionData?.avis === 'Défavorable' ? 'bg-red-500' : ''}"></div>
            <span class="text-medium font-bold">Défavorable</span>
          </div>
        </td>
      </tr>
    </table>
  </div>

  <div style="height: 20px;"></div>

  <!-- Recommandations -->
  <div class="bg-light-gray border-black p-4">
    <span class="text-large font-bold underline">RECOMMANDATIONS:</span>
    <div style="height: 5px;"></div>
    <div class="border-black" style="height: 60px; padding: 2px;">
      <span class="text-medium">${this.inspectionData?.recommandations || 'Vérifier la pression des pneus avant le prochain chargement.'}</span>
    </div>
  </div>

  <div style="height: 20px;"></div>

  <!-- Signatures -->
  <table width="100%">
    <tr>
      <td width="30"></td>
      <td width="169" class="border-black text-center" style="height: 60px;">
        <div style="height: 30px;"></div>
        <span class="text-medium font-bold">Nom du représentant société</span>
        <div style="height: 10px;"></div>
        <span class="text-normal">${this.inspectionData?.representantSociete || 'Pierre Martin'}</span>
      </td>
      <td width="30"></td>
      <td width="169" class="border-black text-center" style="height: 60px;">
        <div style="height: 20px;"></div>
        <span class="text-medium font-bold">Nom du représentant BA'JINN Consulting</span>
        <div style="height: 5px;"></div>
        <span class="text-normal">${this.inspectionData?.representantBajinn || 'Sophie Leroy'}</span>
      </td>
      <td width="30"></td>
      <td width="169" class="border-black text-center" style="height: 60px;">
        <div style="height: 20px;"></div>
        <span class="text-medium font-bold">Nom du représentant CFHP Services</span>
        <div style="height: 5px;"></div>
        <span class="text-normal">${this.inspectionData?.representantCFHP || 'Marc Dubois'}</span>
      </td>
    </tr>
  </table>

  <!-- Pied de page -->
  <div style="height: 304px;"></div>
  <table width="100%">
    <tr>
      <td width="30"></td>
      <td>
        <div class="flex items-center">
          <div class="w-10 h-10 bg-blue-100 rounded flex items-center justify-center mr-2">
            <span class="text-blue-600 font-bold text-lg">CFHP</span>
          </div>
          <div class="text-xlarge font-bold">PARTENAIRES TECHNIQUES</div>
        </div>
      </td>
      <td width="100" class="text-right">
        <div class="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
          <span class="text-gray-600 text-xs">LOGO</span>
        </div>
      </td>
    </tr>
  </table>
</div>
</body>
</html>
    `;
  }

  private formatDate(date: any): string {
    if (!date) return new Date().toLocaleDateString('fr-FR');
    return new Date(date).toLocaleDateString('fr-FR');
  }

  private getCheckbox(statut: string, pointControle: string): string {
    const inspectionStatut = this.inspectionData?.pointsControle?.[pointControle];
    return inspectionStatut === statut ? '✓' : '';
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  closePreview(): void {
    this.close.emit();
  }

  printFiche(): void {
    window.print();
  }

  downloadFiche(): void {
    // Logique de téléchargement
    console.log('Téléchargement de la fiche:', this.inspectionData?.numeroRapport);
  }
}
