import { ChannelStatus } from '../ChannelStatus';

export class LogicalChannelResult {
    logicalChannelName: string;
    state: ChannelStatus;
    constructor(name: string, status: ChannelStatus) {
        this.logicalChannelName = name;
        this.state = status;
    }
}