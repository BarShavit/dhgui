import { Injectable } from '@angular/core';
import { Version } from 'src/app/shared/models/version';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  version: Version | null = null;

  constructor(private http: HttpClient, private constants: ConstantsService) {
  }

  async getVersion(): Promise<Version | null> {
    if (this.version != null) {
      return this.version;
    }

    return this.http.get<Version>(this.constants.getVersion).toPromise()
      .then(data => {
        this.version = data;
        return data;
      })
      .catch(() => { return null; });
  }
}