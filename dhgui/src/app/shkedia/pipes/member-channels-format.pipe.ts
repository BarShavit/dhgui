import { DetailedShkdMember } from './../../shared/models/shkd/detailed-shkd-member';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberChannelsFormat'
})
export class MemberChannelsFormatPipe implements PipeTransform {

  transform(value: DetailedShkdMember): string {
    return `מחובר לערוצים: ${value.connectedChannels.join(", ")}`;
  }

}
