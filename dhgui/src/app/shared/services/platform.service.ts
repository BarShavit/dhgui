import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Platform } from '../models/platform';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  currentPlatform: Platform;
  platforms: Platform[];

  constructor(private http: HttpClient, private constants: ConstantsService) { }

  async getMyPlatform(): Promise<Platform> {
    if (this.currentPlatform != null) {
      return this.currentPlatform;
    }

    return this.http.get(this.constants.getCurrentPlatform).toPromise()
      .then(data => {
        this.currentPlatform = <Platform>data;
        return data;
      })
      .catch(() => { return null; });
  }

  async getPlatforms(): Promise<Platform[]> {
    if (this.platforms != null) {
      return this.platforms;
    }

    return this.http.get(this.constants.getAllPlatforms).toPromise()
      .then(data => {
        this.platforms = <Platform[]>data;
        return data;
      })
      .catch(() => { return null; });
  }
}
