import { createReducer, on } from "@ngrx/store";
import { hideToast, showToast } from "../actions/toast.action";

// toast.reducer.ts
export interface ToastState {
  message: string | null;
  toastType: 'success' | 'danger' | 'warning' | 'info' | null;
}

export const initialState: ToastState = {
  message: null,
  toastType: null
};

export const toastReducer = createReducer(
  initialState,
  on(showToast, (state, { message, toastType }) => ({
    message,
    toastType
  })),
  on(hideToast, () => ({
    message: null,
    toastType: null
  }))
);
