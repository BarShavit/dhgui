import { LogicalChannel } from '../common/logical-channel';
import { ChannelState } from '../common/channel-status';
import { ShkediaMember } from './shkd-member';

export class ShkediaChannel {
    channelId: number;
    logicalChannels: LogicalChannel[];
    topology: ShkediaMember[];
    status: ChannelState;
    sender: ShkediaMember;
}