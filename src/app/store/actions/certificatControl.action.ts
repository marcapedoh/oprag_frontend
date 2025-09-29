import { createAction } from "@ngrx/store";

export const getAllCertificatControl = createAction("[CertificatControl] Get all CertificatControl", (element: string) => ({ element }))
export const getAllCertificatControlSuccess = createAction("[CertificatControl] Get all CertificatControl Success", (certificatControls: ReadonlyArray<any>) => ({ certificatControls }))
export const getAllCertificatControlFailure = createAction("[CertificatControl] Get all CertificatControl Failure", (error: string) => ({ error }))

export const createCertificatControl = createAction("[CertificatControl] create CertificatControl", (certificatControl: any) => ({ certificatControl }))
export const createCertificatControlSuccess = createAction("[CertificatControl] create CertificatControl success", (responseDAO: any) => ({ responseDAO }))
export const createCertificatControlFailure = createAction("[CertificatControl] create CertificatControl failure", (error: string) => ({ error }))

export const visualiserCertificatControl = createAction("[CertificatControl] visualiser CertificatControl", (certificatControl: any) => ({ certificatControl }))
export const visualiserCertificatControlSuccess = createAction("[CertificatControl] visualiser CertificatControl success", (responseDAO: any) => ({ responseDAO }))
export const visualiserCertificatControlFailure = createAction("[CertificatControl] visualiser CertificatControl failure", (error: string) => ({ error }))

export const generateCertificatControl = createAction("[CertificatControl] générer CertificatControl", (certificatControlId: number) => ({ certificatControlId }))
export const generateCertificatControlSuccess = createAction("[CertificatControl] generer CertificatControlSuccess")
export const generateCertificatControlFailure = createAction("[CertificatControl] generer CertificatControlFailure", (error: any) => ({ error }))

export const deleteCertificatControl = createAction("[CertificatControl] delete CertificatControl", (certificatControlId: number) => ({ certificatControlId }))
export const deleteCertificatControlSuccess = createAction("[CertificatControl] delete CertificatControl Success", (id: number) => ({ id }))
export const deleteCertificatControlFailure = createAction("[CertificatControl] delete CertificatControl failure", (error: string) => ({ error }))

export const getCertificatControlsAmount = createAction("[CertificatControl] get CertificatControls Amount")
export const getCertificatControlsAmountSuccess = createAction("[CertificatControl] get CertificatControls Amount success", (totalAmount: number) => ({ totalAmount }));
export const getCertificatControlsAmountFailure = createAction("[CertificatControl] get certificatControl Amount Failure")


export const getInspectionMontant = createAction("[InspectionMontant] Get InspectionMontant", (element: string) => ({ element }))
export const getInspectionMontantSuccess = createAction("[InspectionMontant] Get InspectionMontant success", (montant: ReadonlyArray<any>) => ({ montant }))
export const getInspectionMontantFailure = createAction("[InspectionMontant] Get InspectionMontant failure", (error: any) => ({ error }))


export const createInspectionMontant = createAction("[InspectionMontant] Create InspectionMontant", (inspectionMontant: any) => ({ inspectionMontant }))
export const createInspectionMontantSuccess = createAction("[InspectionMontant] Create InspectionMontant success", (responseDAO: any) => ({ responseDAO }))
export const createInspectionMontantFailure = createAction("[InspectionMontant] Create InspectionMontant failure", (error: any) => ({ error }))


export const deleteInspectionMontant = createAction("[InspectionMontant] delete InspectionMontant", (id: number) => ({ id }))
export const deleteInspectionMontantSuccess = createAction("[InspectionMontant] delete InspectionMontant sucess")
export const deleteInspectionMontantFailure = createAction("[InspectionMontant] delete inspectionMontant failure", (error: string) => ({ error }))


export const getStat = createAction("[Stat] get Stat", (dateDebut, dateFin, inspectionId) => ({ dateDebut, dateFin, inspectionId }))
export const getStatSuccess = createAction("[Stat] get Stat success", (stat: any) => ({ stat }))
export const getStatFailure = createAction("[Stat] get Stat failure", (error: string) => ({ error }))

export const getStatWithoutInspection = createAction("[Stat] get Stat Without Inspection", (dateDebut, dateFin) => ({ dateDebut, dateFin }))
export const getStatWithoutInspectionSuccess = createAction("[Stat] get Stat Without Inspection success", (stat: any) => ({ stat }))
export const getStatWithoutInspectionFailure = createAction("[Stat] get Stat Without Inspection failure", (error: string) => ({ error }))
