import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Platform } from '../models/platform';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  currentPlatform: Platform | null = null;
  platforms: Platform[] | null = null;

  constructor(private http: HttpClient, private constants: ConstantsService) { }

  async getMyPlatform(): Promise<Platform | null> {
    if (this.currentPlatform != null) {
      return this.currentPlatform;
    }

    return this.http.get<Platform>(this.constants.getCurrentPlatform).toPromise()
      .then(data => {
        this.currentPlatform = data;
        return data;
      })
      .catch(() => { return null; });
  }

  async getPlatforms(): Promise<Platform[] | null> {
    if (this.platforms != null) {
      return this.platforms;
    }

    return this.http.get<Platform[]>(this.constants.getAllPlatforms).toPromise()
      .then(data => {
        this.platforms = data;
        return data;
      })
      .catch(() => { return null; });
  }
}
