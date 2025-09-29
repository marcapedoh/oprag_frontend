import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FicheService } from '../../services/fiche.service';

@Component({
  selector: 'app-fiche-qr-view',
  templateUrl: './fiche-qr-view.component.html',
  styleUrls: ['./fiche-qr-view.component.css']
})
export class FicheQrViewComponent implements OnInit {
  certificatControlId!: number;
  ficheData: any = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private ficheService: FicheService
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID depuis l'URL
    this.route.params.subscribe(params => {
      this.certificatControlId = +params['id'];
      this.loadFicheData();
    });
  }

  loadFicheData(): void {
    this.loading = true;
    this.error = null;

    this.ficheService.getFicheById(this.certificatControlId).subscribe({
      next: (data) => {
        this.ficheData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement de la fiche:', error);
        this.error = 'Impossible de charger la fiche. Veuillez réessayer.';
        this.loading = false;
      }
    });
  }

  downloadPdf(): void {
    this.ficheService.downloadAndSaveFichePdf(this.certificatControlId);
  }
}
