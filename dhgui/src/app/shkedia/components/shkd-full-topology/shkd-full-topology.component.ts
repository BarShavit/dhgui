import { DetailedShkdMember } from './../../../shared/models/shkd/detailed-shkd-member';
import { ShkdService } from './../../services/shkd.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shkd-full-topology',
  templateUrl: './shkd-full-topology.component.html',
  styleUrls: ['./shkd-full-topology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShkdFullTopologyComponent implements OnInit {

  public filterText: string = "";

  constructor(public shkdService: ShkdService) { }

  ngOnInit(): void {
  }

  trackByFunc(_: number, value: DetailedShkdMember) {
    return value.id;
  }

}
