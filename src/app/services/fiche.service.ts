import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FicheService {
  private baseUrl: string = "https://badge.routeafrique.com";

  constructor(private httpClient: HttpClient) { }

  /**
   * Récupère les données d'une fiche par son ID de certificat de contrôle
   */
  getFicheById(certificatControlId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}:1020/OPRAG/v0/endpoint/CertificatControl/${certificatControlId}`);
  }

  /**
   * Télécharge le PDF d'une fiche
   */
  downloadFichePdf(certificatControlId: number): Observable<Blob> {
    return this.httpClient.get(`${this.baseUrl}:1020/OPRAG/v0/endpoint/Reports/exportReportForQrCode/pdf/${certificatControlId}`, {
      responseType: 'blob'
    });
  }

  /**
   * Télécharge le PDF et l'enregistre automatiquement
   */
  downloadAndSaveFichePdf(certificatControlId: number): void {
    this.downloadFichePdf(certificatControlId).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fiche-inspection-${certificatControlId}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error('Erreur lors du téléchargement du PDF:', error);
      }
    });
  }
}