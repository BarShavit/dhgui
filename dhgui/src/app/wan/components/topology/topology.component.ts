import { Component, OnInit } from '@angular/core';
import { WanService } from '../../services/wan.service';
import { WanMember } from 'src/app/shared/models/wan/member';
import * as moment from 'moment';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent implements OnInit {

  constructor(public wanService: WanService) { }

  ngOnInit(): void {
  }

  lastSeen(member : WanMember){
    return moment(member.lastSeen).format("DD/MM/YYYY HH:mm:ss");
  }
}
