import { WanService } from './../../services/wan.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wan-full-topology',
  templateUrl: './wan-full-topology.component.html',
  styleUrls: ['./wan-full-topology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WanFullTopologyComponent implements OnInit {

  public filterText: string = "";

  constructor(public wanService: WanService) { }

  ngOnInit(): void {
  }

}
