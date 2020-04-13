import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Platform } from '../models/platform';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  currentPlatform$ = new BehaviorSubject<Platform | null>(null);
  platforms$ = new BehaviorSubject<Platform[]>([]);

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get<Platform>(this.constants.getCurrentPlatform).toPromise()
      .then(data => {
        this.currentPlatform$.next(data);
      });

    this.http.get<Platform[]>(this.constants.getAllPlatforms).toPromise()
      .then(data => {
        this.platforms$.next(data);
      });
  }
}
