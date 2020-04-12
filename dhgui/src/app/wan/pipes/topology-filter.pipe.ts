import { WanMember } from 'src/app/shared/models/wan/member';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'topologyFilter'
})
export class TopologyFilterPipe implements PipeTransform {

  /**
   * Filter the wan topology, keeps a member only if one condition exists:
   * 1. The member is connected
   * 2. The member is offline, but last seen in the last hour
   * @param value Filtered wan topology
   */
  transform(value: WanMember[] | null): WanMember[] {
    if (value == null) {
      return [];
    }

    return value.filter(member => {
      return member.isConnected ||
        moment().subtract(1, "hour").isBefore(moment(member.lastSeen));
    });
  }

}
