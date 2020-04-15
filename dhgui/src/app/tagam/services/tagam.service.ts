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
  types$ = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getTagamChannels).toPromise().then(data => {
      this.channels$.next(<TagamPhysicalChannel[]>data);
    });

    this.http.get<boolean>(this.constants.getIsTagamActive).toPromise().then(data => {
      this.isActive$.next(data);
    });

    this.http.get<string[]>(this.constants.getTagamAvailableTypes).toPromise().then(data => {
      this.types$.next(data);
    });
  }

  addLogicalChannel(channel: TagamPhysicalChannel, result: LogicalChannelResult) {
    console.log(`Adding channel ${result.logicalChannelName} with state ${result.state}
    to physical channel ${channel.computerName}-${channel.channelId}`);

    //TODO:HTTP
  }

  editLogicalChannel(channel: TagamPhysicalChannel, result: LogicalChannelResult) {
    console.log(`Editing channel ${result.sourceLogicalChannelName} to channel
    ${result.logicalChannelName} with state ${result.state}
    of physical channel ${channel.computerName}-${channel.channelId}`);

    //TODO:HTTP
  }

  deleteLogicalChannel(channel: TagamPhysicalChannel, result: LogicalChannelResult) {
    console.log(`Deleting channel ${result.logicalChannelName}
    of physical channel ${channel.computerName}-${channel.channelId}`);

    //TODO:HTTP
  }

  changeTagamStatus() {
    this.isActive$.next(!this.isActive$.value);
    console.log(`Changed tagam status to ${this.isActive$.value}`);
    //TODO:HTTP
  }

  changeChannelType(channel: TagamPhysicalChannel, newType: string) {
    console.log(`Changed channel ${channel.computerName} - ${channel.channelId} to type ${newType}`);
    //TODO:HTTP
  }
}
