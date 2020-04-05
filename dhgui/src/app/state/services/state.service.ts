import { Injectable } from '@angular/core';
import { Version } from 'src/app/shared/models/version';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  version: Version;

  constructor(private http: HttpClient, private constants: ConstantsService) { }

  async getVersion(): Promise<Version> {
    if (this.version != null) {
      return this.version;
    }

    return this.http.get(this.constants.getVersion).toPromise()
      .then(data => {
        this.version = <Version>data;
        return data;
      })
      .catch(() => { return null; });
  }
}