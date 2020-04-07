import { Component, OnInit, Input } from '@angular/core';
import { LogicalChannel } from 'src/app/shared/models/common/logical-channel';
import { ChannelState } from 'src/app/shared/models/common/channel-status';

@Component({
  selector: 'app-logical-channels-view',
  templateUrl: './logical-channels-view.component.html',
  styleUrls: ['./logical-channels-view.component.scss']
})
export class LogicalChannelsViewComponent implements OnInit {

  @Input() channels: LogicalChannel[] = [];
  @Input() state: ChannelState

  constructor() { }

  ngOnInit(): void {
  }

}
