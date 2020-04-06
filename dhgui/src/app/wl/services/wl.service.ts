import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WLChannel } from 'src/app/shared/models/wl/wl-channel';
import { ConstantsService } from 'src/app/shared/services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class WlService {

  channels: WLChannel[] = [];

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getWLChannels).toPromise().then(data =>{
      this.channels = <WLChannel[]>data;
    });
  }
}
