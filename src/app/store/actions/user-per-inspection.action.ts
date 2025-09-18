import { createAction } from "@ngrx/store";

export const getAllUserPerInspectionName = createAction("[User-Inspection] Get All User Per Inspection")
export const getAllUserPerInspectionNameSuccess = createAction("[User-Inspection] Get All User Per Inspection Success", (usersInspection: ReadonlyArray<any>) => ({ usersInspection }))
export const getAllUserPerInspectionNameFailure = createAction("[User-Inspection] Get All User Per Inspection Failure", (error: string) => ({ error }))

export const getAllUserPerInspectionNameWithParam = createAction("[User-Inspection] Get All User Per Inspection with Param", (nomInspection: string) => ({ nomInspection }))
export const getAllUserPerInspectionNameSuccessWithParam = createAction("[User-Inspection] Get All User Per Inspection With Param Success ", (usersInspection: ReadonlyArray<any>) => ({ usersInspection }))
export const getAllUserPerInspectionNameFailureWithParam = createAction("[User-Inspection] Get All User Per Inspection With Param Failure", (error: string) => ({ error }))

export const getLastOperationDate = createAction("[User-Inspection-Date] Get Last Operation Date", (userId: number) => ({ userId }))
export const getLastOperationDateSuccess = createAction("[User-Inspection-Date] Get Last Operation Date Success", (responseDAO: any) => ({ responseDAO }))
export const getLastOperationDateFailure = createAction("[User-Inspection-Date] Get Last Operation Date Failure", (error: string) => ({ error }))

export const getUserRapport = createAction("[User-Inspection-Rapport] Get User Inspection BadgeRapport", (inspecteurId: number) => ({ inspecteurId }))
export const getUserRapportSuccess = createAction("[User-Inspection-Rapport] Get User Inspection BadgeRapport Success", (rapportBadge: any) => ({ rapportBadge }))
export const getUserRapportFailure = createAction("[User-Inspection-Rapport] Get User Inspection BadgeRapport Failure", (error: string) => ({ error }))

export const getUserRapportCertificat = createAction("[User-Inspection-Rapport] Get User Inspection CertificatRapport", (userId: number) => ({ userId }))
export const getUserRapportCertificatSuccess = createAction("[User-Inspection-Rapport] Get User Inspection CertificatRapport Success", (certificatRapport: any) => ({ certificatRapport }))
export const getUserRapportCertificatFailure = createAction("[User-Inspection-Rapport] Get User Inspection CertificatRapport", (error: string) => ({ error }))
