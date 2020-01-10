import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  // tslint:disable-next-line:variable-name
  private _teacherMessage = new Subject<string>();
  teacherMessage$ = this._teacherMessage.asObservable();
  newMessage: string;
  constructor() { }

  sendMessage(message: string) {
    this._teacherMessage.next(message);
  }
}
