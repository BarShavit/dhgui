import { DetailedShkdMember } from './../../shared/models/shkd/detailed-shkd-member';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShkediaChannel } from 'src/app/shared/models/shkd/shkedia-channel';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { LogicalChannelResult } from 'src/app/shared/models/common/logical-channel-result';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShkdService {

  channels$ = new BehaviorSubject<ShkediaChannel[]>([]);
  detailedTopology$ = new BehaviorSubject<DetailedShkdMember[]>([]);
  isActive$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getShkediaChannels).toPromise().then(data => {
      this.channels$.next(<ShkediaChannel[]>data);
      this.detailedTopology$.next(this.getDetailedTopology());
    });

    this.http.get<boolean>(this.constants.getIsShkdActive).toPromise().then(data => {
      this.isActive$.next(data);
    });
  }

  /**
 * Each shkd channel got his topology list
 * We merge all the connected members from all channels
 * to one list.
 * Each member has list of channels which he connected to.
 * So we will be able to show all the topology in one place
 * and the client will be able to find mismatchs.
 */
  private getDetailedTopology(): DetailedShkdMember[] {
    let result = new Map<number, DetailedShkdMember>();

    // Run with for and not foreach to save the channel order
    // without needing of sort
    for (let i = 0; i < this.channels$.value.length; i++) {
      this.channels$.value[i].topology.forEach(member => {
        if (!result.has(member.id)) {
          result.set(member.id, new DetailedShkdMember(member.id, member.name));
        }

        result.get(member.id)?.connectedChannels.push(
          this.channels$.value[i].channelId);
      });
    }

    return Array.from(result.values());
  }

  addLogicalChannel(channel: ShkediaChannel, result: LogicalChannelResult) {
    console.log(`Adding channel ${result.logicalChannelName} with state ${result.state}
    to physical channel ${channel.channelId}`);

    //TODO:HTTP
  }

  editLogicalChannel(channel: ShkediaChannel, result: LogicalChannelResult) {
    console.log(`Editing channel ${result.sourceLogicalChannelName} to channel
    ${result.logicalChannelName} with state ${result.state}
    of physical channel ${channel.channelId}`);

    //TODO:HTTP
  }

  deleteLogicalChannel(channel: ShkediaChannel, result: LogicalChannelResult) {
    console.log(`Deleting channel ${result.logicalChannelName}
    of physical channel ${channel.channelId}`);

    //TODO:HTTP
  }

  changeShkediaStatus() {
    this.isActive$.next(!this.isActive$.value);
    console.log(`Changed wan status to ${this.isActive$.value}`);
    //TODO:HTTP
  }
}
