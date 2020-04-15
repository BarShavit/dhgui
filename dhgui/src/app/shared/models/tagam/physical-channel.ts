import { LogicalChannel } from '../common/logical-channel';
import { ChannelState } from '../common/channel-status';

export class TagamPhysicalChannel {
    computerName: string;
    channelId: number;
    type: string;
    logicalChannels: LogicalChannel[];
    status: ChannelState;
    ip: string;

    constructor() {
        this.computerName = "";
        this.channelId = 0;
        this.type = "";
        this.ip = "";
        this.logicalChannels = [];
        this.status = ChannelState.Failure;
    }
}