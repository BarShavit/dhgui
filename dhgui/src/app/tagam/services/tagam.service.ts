import { BehaviorSubject } from 'rxjs';
import { LogicalChannelResult } from './../../shared/models/common/logical-channel-result';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TagamPhysicalChannel } from 'src/app/shared/models/tagam/physical-channel';

@Injectable({
  providedIn: 'root'
})
export class TagamService {

  channels$ = new BehaviorSubject<TagamPhysicalChannel[]>([]);
  isActive$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getTagamChannels).toPromise().then(data => {
      this.channels$.next(<TagamPhysicalChannel[]>data);
    });

    this.http.get<boolean>(this.constants.getIsTagamActive).toPromise().then(data => {
      this.isActive$.next(data);
    });
  }

  addLogicalChannel(channel: TagamPhysicalChannel, result: LogicalChannelResult) {
    console.log(`Adding channel ${result.logicalChannelName} with state ${result.state}
    to physical channel ${channel.computerName}-${channel.channel}`);

    //TODO:HTTP
  }

  editLogicalChannel(channel: TagamPhysicalChannel, result: LogicalChannelResult) {
    console.log(`Editing channel ${result.sourceLogicalChannelName} to channel
    ${result.logicalChannelName} with state ${result.state}
    of physical channel ${channel.computerName}-${channel.channel}`);

    //TODO:HTTP
  }

  deleteLogicalChannel(channel: TagamPhysicalChannel, result: LogicalChannelResult) {
    console.log(`Deleting channel ${result.logicalChannelName}
    of physical channel ${channel.computerName}-${channel.channel}`);

    //TODO:HTTP
  }

  changeTagamStatus() {
    this.isActive$.next(!this.isActive$.value);
    console.log(`Changed tagam status to ${this.isActive$}`);
    //TODO:HTTP
  }
}
