import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FicheService } from '../../services/fiche.service';

@Component({
  selector: 'app-fiche-qr-view',
  templateUrl: './fiche-qr-view.component.html',
  styleUrls: ['./fiche-qr-view.component.css']
})
export class FicheQrViewComponent implements OnInit, OnDestroy {
  certificatControlId!: number;
  ficheData: any = null;
  loading = true;
  error: string | null = null;

  // PDF viewer state
  pdfSrc: string | null = null;
  currentPage = 1;
  totalPages = 1;
  zoom = 1;

  private pdfObjectUrl: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private ficheService: FicheService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.certificatControlId = +params['id'];
      this.loadFicheData();
    });
  }

  ngOnDestroy(): void {
    this.revokePdfUrl();
  }

  loadFicheData(): void {
    this.loading = true;
    this.error = null;

    this.ficheService.getFicheById(this.certificatControlId).subscribe({
      next: (data) => {
        this.ficheData = data;
        this.loadPdf();
      },
      error: (error) => {
        console.error('Erreur lors du chargement de la fiche:', error);
        this.error = 'Impossible de charger la fiche. Veuillez réessayer.';
        this.loading = false;
      }
    });
  }

  loadPdf(): void {
    this.ficheService.downloadFichePdf(this.certificatControlId).subscribe({
      next: (blob: Blob) => {
        this.updatePdfSrc(blob);
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement du PDF:', error);
        this.error = 'Impossible de charger le PDF. Veuillez réessayer.';
        this.loading = false;
      }
    });
  }

  downloadPdf(): void {
    this.ficheService.downloadAndSaveFichePdf(this.certificatControlId);
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

  onPdfLoaded(pdf: any): void {
    this.totalPages = pdf.numPages;
    console.log('PDF chargé avec', this.totalPages, 'pages');
  }

  onPageRendered(event: any): void {
    console.log('Page rendue:', event);
  }

  getPdfUrl(): string {
    return `https://badge.routeafrique.com:1020/OPRAG/v0/endpoint/Reports/exportReportForQrCode/pdf/${this.certificatControlId}`;
  }

  private updatePdfSrc(blob: Blob): void {
    this.revokePdfUrl();
    this.pdfObjectUrl = URL.createObjectURL(blob);
    this.pdfSrc = this.pdfObjectUrl;
  }

  private revokePdfUrl(): void {
    if (this.pdfObjectUrl) {
      URL.revokeObjectURL(this.pdfObjectUrl);
      this.pdfObjectUrl = null;
    }
  }
}
