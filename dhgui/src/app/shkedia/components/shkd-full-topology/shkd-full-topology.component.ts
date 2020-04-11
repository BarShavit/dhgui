import { DetailedShkdMember } from './../../../shared/models/shkd/detailed-shkd-member';
import { ShkdService } from './../../services/shkd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shkd-full-topology',
  templateUrl: './shkd-full-topology.component.html',
  styleUrls: ['./shkd-full-topology.component.scss']
})
export class ShkdFullTopologyComponent implements OnInit {

  public filterText: string = "";

  constructor(private shkdService: ShkdService) { }

  ngOnInit(): void {
  }

  /**
   * Each shkd channel got his topology list
   * We merge all the connected members from all channels
   * to one list.
   * Each member has list of channels which he connected to.
   * So we will be able to show all the topology in one place
   * and the client will be able to find mismatchs.
   */
  getDetailedTopology(): DetailedShkdMember[] {
    let result = new Map<number, DetailedShkdMember>();

    // Run with for and not foreach to save the channel order
    // without needing of sort
    for (let i = 0; i < this.shkdService.channels.length; i++) {
      this.shkdService.channels[i].topology.forEach(member => {
        if (!result.has(member.id)) {
          result.set(member.id, new DetailedShkdMember(member.id, member.name));
        }

        result.get(member.id)?.connectedChannels.push(
          this.shkdService.channels[i].channelId);
      });
    }

    return Array.from(result.values());
  }

}
