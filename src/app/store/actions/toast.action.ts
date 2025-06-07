import { createAction } from "@ngrx/store";

export const showToast = createAction("[Toast] show", (message: string, toastType: "warning" | "success" | "info" | "danger") => ({ message, toastType }))
export const hideToast = createAction("[Toast] hide")
