import { DetailedShkdMember } from './../../shared/models/shkd/detailed-shkd-member';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberNameFilter'
})
export class MemberNameFilterPipe implements PipeTransform {

  transform(value: DetailedShkdMember[], filter: string): DetailedShkdMember[] {
    return value.filter(member => member.name.includes(filter));
  }

}
