import { LogicalChannel } from '../common/logical-channel';
import { ChannelState } from '../common/channel-status';

export class TagamPhysicalChannel {
    computerName: string;
    channel: number;
    logicalChannels: LogicalChannel[];
    status: ChannelState;
}