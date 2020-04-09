import { TagamService } from './../../services/tagam.service';
import { Component, OnInit } from '@angular/core';
import { ChannelState } from 'src/app/shared/models/common/channel-status';

@Component({
  selector: 'app-tagam-content',
  templateUrl: './tagam-content.component.html',
  styleUrls: ['./tagam-content.component.scss']
})
export class TagamContentComponent implements OnInit {

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
}
