import { Injectable } from '@angular/core';
import { Version } from 'src/app/shared/models/version';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  version$ = new BehaviorSubject<Version>(new Version());

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get<Version>(this.constants.getVersion).toPromise()
      .then(data => {
        this.version$.next(data);
      });
  }
}