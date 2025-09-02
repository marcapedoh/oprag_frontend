import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notyf = new Notyf({
    duration: 3000,
    position: { x: 'right', y: 'top' }
  });

  success(message: string) {
    this.notyf.success(message);
  }

  error(message: string) {
    this.notyf.error(message);
  }

  info(message: string) {
    this.notyf.open({
      type: 'info',
      message,
      background: '#3b82f6'
    });
  }

  warning(message: string) {
    this.notyf.open({
      type: 'warning',
      message,
      background: '#f59e0b'
    });
  }
}
