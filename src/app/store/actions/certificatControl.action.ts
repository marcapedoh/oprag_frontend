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
export const deleteCertificatControlSuccess = createAction("[CertificatControl] delete CertificatControl Success")
export const deleteCertificatControlFailure = createAction("[CertificatControl] delete CertificatControl failure", (error: string) => ({ error }))
