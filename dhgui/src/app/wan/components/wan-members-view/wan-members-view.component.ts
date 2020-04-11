import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WanMember } from 'src/app/shared/models/wan/member';
import * as moment from 'moment';

@Component({
  selector: 'app-wan-members-view',
  templateUrl: './wan-members-view.component.html',
  styleUrls: ['./wan-members-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WanMembersViewComponent implements OnInit {
  @Input() members: WanMember[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  lastSeen(member: WanMember) {
    return moment(member.lastSeen).format("DD/MM/YYYY HH:mm:ss");
  }
}
