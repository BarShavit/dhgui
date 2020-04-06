import { TagamService } from './../../services/tagam.service';
import { Component, OnInit } from '@angular/core';
import { TagamStatus } from 'src/app/shared/models/tagam/physical-channel';

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

  getStatusName(status: TagamStatus): string {
    switch (status) {
      case TagamStatus.free: {
        return "פנוי";
      }
      case TagamStatus.sending: {
        return "שולח";
      }
      case TagamStatus.receiving: {
        return "מקבל";
      }
      case TagamStatus.failure: {
        return "תקול";
      }
      default: {
        return "לא ידוע";
      }
    }
  }
}
