import { ConstantsService } from 'src/app/shared/services/constants.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TagamPhysicalChannel } from 'src/app/shared/models/tagam/physical-channel';

@Injectable({
  providedIn: 'root'
})
export class TagamService {

  channels: TagamPhysicalChannel[] = [];

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getTagamChannels).toPromise().then(data => {
      this.channels = <TagamPhysicalChannel[]>data;
    });
  }
}
