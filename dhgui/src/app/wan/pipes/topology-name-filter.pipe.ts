import { Pipe, PipeTransform } from '@angular/core';
import { WanMember } from 'src/app/shared/models/wan/member';

@Pipe({
  name: 'topologyNameFilter'
})
export class TopologyNameFilterPipe implements PipeTransform {

  transform(value: WanMember[], filter: string): WanMember[] {
    return value.filter(member => member.name.includes(filter));
  }
  
}
