import { LogicalChannel } from '../common/logical-channel';
import { ChannelState } from '../common/channel-status';
import { ShkediaMember } from './shkd-member';

export class ShkediaChannel {
    channelId: number;
    logicalChannels: LogicalChannel[];
    topology: ShkediaMember[];
    status: ChannelState;
    sender: ShkediaMember;

    constructor() {
        this.channelId = 0;
        this.logicalChannels = [];
        this.topology = [];
        this.status = ChannelState.Failure;
        this.sender = new ShkediaMember();
    }
}