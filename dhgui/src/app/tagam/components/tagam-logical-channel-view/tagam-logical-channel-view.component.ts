import { TagamPhysicalChannel } from './../../../shared/models/tagam/physical-channel';
import { Component, OnInit, Input } from '@angular/core';
import { LogicalChannel } from 'src/app/shared/models/common/logical-channel';

@Component({
  selector: 'app-tagam-logical-channel-view',
  templateUrl: './tagam-logical-channel-view.component.html',
  styleUrls: ['./tagam-logical-channel-view.component.scss']
})
export class TagamLogicalChannelViewComponent implements OnInit {

  @Input() channel: TagamPhysicalChannel;

  constructor() { }

  ngOnInit(): void {
  }

}
