import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AlertMessage {
  prefix: string;
  message: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class NgSimpleAlertService {
  constructor() {}

  public alertMessage$ = new Subject<AlertMessage>();

  public createSuccessAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Successss', message, 'green'));
  }

  public createDangerAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
  }

  public createWarningAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
  }

  public createInfoAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
  }

  private createAlertMessage(prefix: string, message: string, color: string): AlertMessage {
    return { prefix, message, color };
  }
}
