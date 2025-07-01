import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = "https://badge.routeafrique.com"

  loadData(element: string) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/" + element + "/all");
  }

  createObject(element: string, obj: any) {

    return this.httpClient.post<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/" + element + "/create", obj);
  }

  createReport(reportFormat: string, certificatControl: number) {
    return this.httpClient.post<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Reports/exportReport/" + reportFormat + "/" + certificatControl, null, { responseType: 'blob' as 'json' })
      .subscribe((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'inspectionFiche.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      });

  }
  createReportWithNgrx(reportFormat: string, certificatControl: number) {
    return this.httpClient.post<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Reports/exportReport/" + reportFormat + "/" + certificatControl, null, { responseType: 'blob' as 'json' })


  }

  deleteCertificatControl(certificatControlId: number) {
    return this.httpClient.delete(this.baseUrl + ":1020/OPRAG/v0/endpoint/CertificatControls/delete/" + certificatControlId)
  }

  createQrCodeImage(numero: string) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Badges/getQrCode/" + numero, { responseType: 'blob' as 'json' })
      .subscribe((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'qrCodeImage.png';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

  createQrCodeImageWithNgRx(numero: string) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Badges/getQrCode/" + numero, { responseType: 'blob' as 'json' })

  }

  countAllPerDay() {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Badges/countAllPerDay")
  }

  usersPerInspectionName(inspectionName: string) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Utilisateurs/findAllByInspectionNom/" + inspectionName)
  }

  findUserById(userId: number) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Utilisateurs/findById/" + userId)
  }
  updateUser(user: any) {
    return this.httpClient.post<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/auth/update", user)
  }
  lastUpdateDate(userId: number) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Utilisateurs/lastOperationDate/" + userId)
  }

  loadBadgeReport(inspecteurId: number) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Badges/findAllPerInspecteurId/" + inspecteurId)
  }
  loadCertificatReport(userId: number) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/CertificatControls/findCertificatControlByUtilisateurId/" + userId)
  }
  loadInspections() {
    // this.baseUrl +
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Inspections/all")
  }
  createInspection(inspection: any) {
    return this.httpClient.post<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Inspections/create", inspection)
  }
  countAllPerInterval(dateDebut: string, dateFin: string) {
    return this.httpClient.get<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Badges/countAllPerIntervalDays/" + dateDebut + "/" + dateFin)
  }
  registerChauffeur(chauffeurRequest: any) {
    return this.httpClient.post<any>(this.baseUrl + ":1020/OPRAG/v0/endpoint/Chauffeurs/register", chauffeurRequest)
  }
}
