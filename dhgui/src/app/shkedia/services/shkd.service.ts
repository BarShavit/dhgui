import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShkediaChannel } from 'src/app/shared/models/shkd/shkedia-channel';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class ShkdService {

  channels: ShkediaChannel[] = [];

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getShkediaChannels).toPromise().then(data => {
      this.channels = <ShkediaChannel[]>data;
    });
  }
}
