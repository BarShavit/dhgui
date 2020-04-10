import { LogicalChannelResult } from './../../shared/models/common/logical-channel-result';
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
}
