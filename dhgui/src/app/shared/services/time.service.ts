import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private currentTime$ = new BehaviorSubject<Date>(new Date());

  constructor() { }

  getDateString(): string {
    return moment(this.currentTime$.value).format("D/M/YYYY H:mm:ss");
  }
}
