import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { SystemLiveliness } from 'src/app/shared/models/system-liveliness';

@Injectable({
  providedIn: 'root'
})
export class LivelinessService {

  systemLiveliness: SystemLiveliness[] = [];

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get<SystemLiveliness>(this.constants.getShobLiveliness)
      .toPromise().then(this.setNewLiveliness.bind(this));
    this.http.get<SystemLiveliness>(this.constants.getMivrakaLiveliness)
      .toPromise().then(this.setNewLiveliness.bind(this));
    this.http.get<SystemLiveliness>(this.constants.getBugLiveliness)
      .toPromise().then(this.setNewLiveliness.bind(this));
    this.http.get<SystemLiveliness>(this.constants.getBombLiveliness)
      .toPromise().then(this.setNewLiveliness.bind(this));
  }

  private setNewLiveliness(liveliness: SystemLiveliness) {
    this.systemLiveliness.push(liveliness);

    // We sort to save the same liveliness order
    this.systemLiveliness.sort((a, b) => a.systemName < b.systemName ? -1 : a.systemName > b.systemName ? 1 : 0)
  }
}
