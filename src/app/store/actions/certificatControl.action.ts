import { createAction } from "@ngrx/store";

export const getAllCertificatControl=createAction("[CertificatControl] Get all CertificatControl",(element:string)=>({element}))
export const getAllCertificatControlSuccess=createAction("[CertificatControl] Get all CertificatControl Success",(certificatControls:ReadonlyArray<any>)=>({certificatControls}))
export const getAllCertificatControlFailure=createAction("[CertificatControl] Get all CertificatControl Failure",(error:string)=>({error}))

export const createCertificatControl=createAction("[CertificatControl] create CertificatControl",(certificatControl:any)=>({certificatControl}))
export const createCertificatControlSuccess=createAction("[CertificatControl] create CertificatControl success",(responseDAO:any)=>({responseDAO}))
export const createCertificatControlFailure=createAction("[CertificatControl] create CertificatControl failure",(error:string)=>({error}))