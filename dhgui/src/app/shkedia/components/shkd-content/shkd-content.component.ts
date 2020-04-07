import { ShkdService } from './../../services/shkd.service';
import { Component, OnInit } from '@angular/core';
import { ChannelState } from 'src/app/shared/models/common/channel-status';

@Component({
  selector: 'app-shkd-content',
  templateUrl: './shkd-content.component.html',
  styleUrls: ['./shkd-content.component.scss']
})
export class ShkdContentComponent implements OnInit {

  displayedColumns: string[] = ['channelId', 'logicalChannels', 'status', 'sender', 'topology'];

  constructor(public shkdService: ShkdService) { }

  ngOnInit(): void {
  }

  getStatusName(status: ChannelState): string {
    switch (status) {
      case ChannelState.free: {
        return "פנוי";
      }
      case ChannelState.sending: {
        return "שולח";
      }
      case ChannelState.receiving: {
        return "מקבל";
      }
      case ChannelState.failure: {
        return "תקול";
      }
      default: {
        return "לא ידוע";
      }
    }
  }
}
