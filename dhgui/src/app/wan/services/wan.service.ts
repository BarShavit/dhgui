import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { WanMember } from 'src/app/shared/models/wan/member';

@Injectable({
  providedIn: 'root'
})
export class WanService {

  topology: WanMember[] = [];

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getTology).toPromise().then(data => {
      this.topology = <WanMember[]>data;
    });
  }
}
