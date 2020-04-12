import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WLChannel } from 'src/app/shared/models/wl/wl-channel';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WlService {

  channels$ = new BehaviorSubject<WLChannel[]>([]);

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getWLChannels).toPromise().then(data => {
      this.channels$.next(<WLChannel[]>data);
    });
  }
}
