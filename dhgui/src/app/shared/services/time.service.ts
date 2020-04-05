import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private currentTime : Date = new Date();

  constructor() { }

  getDateString() : string{
    return moment(this.currentTime).format("D/M/YYYY H:mm:ss");
  }
}
