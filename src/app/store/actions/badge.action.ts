import { createAction } from "@ngrx/store";

export const getAllBadge = createAction("[Badge] Get all Badge", (element: string) => ({ element }));
export const getAllBadgeSuccess = createAction("[Badge] Get all Badge sucess", (badges: ReadonlyArray<any>) => ({ badges }))
export const getAllBadgeFailure = createAction("[Badge] Get all Badge Failure", (error: string) => ({ error }))

export const createBadge = createAction("[Badge] create Badge", (badge: any) => ({ badge }))
export const createBadgeSuccess = createAction("[Badge] create Badge sucess", (responseDAO: any) => ({ responseDAO }))
export const createBadgeFailure = createAction("[Badge] create Badge Failure", (error: any) => ({ error }))

export const createQrCodeImage = createAction("[BadgeQr] create BadgeQrCode", (numero: string) => ({ numero }))
export const createQrCodeImageSuccess = createAction("[BadgeQr] create BadgeQrCode success")
export const createQrCodeImageFailure = createAction("[BadgeQr] create BadgeQrCode failure")
