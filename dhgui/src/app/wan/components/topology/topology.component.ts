import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WanService } from '../../services/wan.service';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopologyComponent implements OnInit {

  constructor(public wanService: WanService) { }

  ngOnInit(): void {
  }
}
