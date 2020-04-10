import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShkediaChannel } from 'src/app/shared/models/shkd/shkedia-channel';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { LogicalChannelResult } from 'src/app/shared/models/common/logical-channel-result';

@Injectable({
  providedIn: 'root'
})
export class ShkdService {

  channels: ShkediaChannel[] = [];
  isActive: boolean = true;

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getShkediaChannels).toPromise().then(data => {
      this.channels = <ShkediaChannel[]>data;
    });

    this.http.get<boolean>(this.constants.getIsShkdActive).toPromise().then(data => {
      this.isActive = data;
    });
  }

  addLogicalChannel(channel: ShkediaChannel, result: LogicalChannelResult) {
    console.log(`Adding channel ${result.logicalChannelName} with state ${result.state}
    to physical channel ${channel.channelId}`);

    //TODO:HTTP
  }

  editLogicalChannel(channel: ShkediaChannel, result: LogicalChannelResult) {
    console.log(`Editing channel ${result.sourceLogicalChannelName} to channel
    ${result.logicalChannelName} with state ${result.state}
    of physical channel ${channel.channelId}`);

    //TODO:HTTP
  }

  deleteLogicalChannel(channel: ShkediaChannel, result: LogicalChannelResult) {
    console.log(`Deleting channel ${result.logicalChannelName}
    of physical channel ${channel.channelId}`);

    //TODO:HTTP
  }

  changeShkediaStatus() {
    this.isActive = !this.isActive;
    console.log(`Changed wan status to ${this.isActive}`);
    //TODO:HTTP
  }
}
