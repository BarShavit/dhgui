import { LogicalChannelResult } from './../../../shared/models/common/logical-channel-result';
import { TagamPhysicalChannel } from 'src/app/shared/models/tagam/physical-channel';
import { TagamService } from './../../services/tagam.service';
import { Component, OnInit } from '@angular/core';
import { ChannelState } from 'src/app/shared/models/common/channel-status';

@Component({
  selector: 'app-tagam-content',
  templateUrl: './tagam-content.component.html',
  styleUrls: ['./tagam-content.component.scss']
})
export class TagamContentComponent implements OnInit {

  displayChannelManagement = new Map<string, boolean>();
  displayedColumns: string[] = ['computerName', 'channel', 'logicalChannels', 'status'];

  constructor(public tagamService: TagamService) { }

  ngOnInit(): void {
  }

  getStatusName(status: ChannelState): string {
    switch (status) {
      case ChannelState.Free: {
        return "פנוי";
      }
      case ChannelState.Sending: {
        return "שולח";
      }
      case ChannelState.Receiving: {
        return "מקבל";
      }
      case ChannelState.Failure: {
        return "תקול";
      }
      default: {
        return "לא ידוע";
      }
    }
  }

  mouseOverChannels(computerName: string, channelNumber: number) {
    let channelName = `${computerName}${channelNumber}`;
    this.displayChannelManagement.set(channelName, true);
  }

  mouseLeftChannels(computerName: string, channelNumber: number) {
    let channelName = `${computerName}${channelNumber}`;
    this.displayChannelManagement.set(channelName, false);
  }

  showManagement(computerName: string, channelNumber: number): boolean {
    let channelName = `${computerName}${channelNumber}`;
    let channelHover = this.displayChannelManagement.get(channelName);
    if (channelHover == null) {
      return false;
    }

    return channelHover;
  }

  addChannel(channel: TagamPhysicalChannel, newLogicalChannel: LogicalChannelResult) {
    this.tagamService.addLogicalChannel(channel, newLogicalChannel);
  }
}
