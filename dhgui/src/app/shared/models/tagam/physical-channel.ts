import { LogicalChannel } from '../common/logical-channel';
import { ChannelState } from '../common/channel-status';

export class TagamPhysicalChannel {
    computerName: string;
    channel: number;
    logicalChannels: LogicalChannel[];
    status: ChannelState;
    ip: string;

    constructor() {
        this.computerName = "";
        this.channel = 0;
        this.ip = "";
        this.logicalChannels = [];
        this.status = ChannelState.Failure;
    }
}