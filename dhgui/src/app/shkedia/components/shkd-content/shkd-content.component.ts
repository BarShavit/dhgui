import { ShkediaChannel } from './../../../shared/models/shkd/shkedia-channel';
import { ShkdService } from './../../services/shkd.service';
import { Component, OnInit } from '@angular/core';
import { ChannelState } from 'src/app/shared/models/common/channel-status';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ShkdTopologyViewComponent } from '../shkd-topology-view/shkd-topology-view.component';
import { LogicalChannelResult } from 'src/app/shared/models/common/logical-channel-result';

@Component({
  selector: 'app-shkd-content',
  templateUrl: './shkd-content.component.html',
  styleUrls: ['./shkd-content.component.scss']
})
export class ShkdContentComponent implements OnInit {

  displayChannelManagement = new Map<number, boolean>();
  displayedColumns: string[] = ['channelId', 'logicalChannels', 'status', 'sender', 'topology'];

  constructor(public shkdService: ShkdService,
    private dialog: MatDialog) { }

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

  topology(channel: ShkediaChannel) {
    let config = new MatDialogConfig();
    config.data = channel;
    config.width = "350px";

    this.dialog.open(ShkdTopologyViewComponent, config);
  }

  mouseOverChannels(channelId: number) {
    this.displayChannelManagement.set(channelId, true);
  }

  mouseLeftChannels(channelId: number) {
    this.displayChannelManagement.set(channelId, false);
  }

  showManagement(channelId: number): boolean {
    let channelHover = this.displayChannelManagement.get(channelId);
    if (channelHover == null) {
      return false;
    }

    return channelHover;
  }

  addChannel(channel: ShkediaChannel, newLogicalChannel: LogicalChannelResult) {
    this.shkdService.addLogicalChannel(channel, newLogicalChannel);
  }

  editChannel(channel: ShkediaChannel, logicalChannelResult: LogicalChannelResult) {
    if (logicalChannelResult.isDelete) {
      this.shkdService.deleteLogicalChannel(channel, logicalChannelResult);
    } else {
      this.shkdService.editLogicalChannel(channel, logicalChannelResult);
    }
  }
}
