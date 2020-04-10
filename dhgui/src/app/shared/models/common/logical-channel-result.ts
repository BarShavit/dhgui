import { ChannelStatus } from '../ChannelStatus';

export class LogicalChannelResult {
    sourceLogicalChannelName: string;
    logicalChannelName: string;
    state: ChannelStatus;
    isDelete: boolean;
    constructor(sourceLogicalChannelName: string, name: string, status: ChannelStatus, isDelete: boolean) {
        this.sourceLogicalChannelName = sourceLogicalChannelName;
        this.logicalChannelName = name;
        this.state = status;
        this.isDelete = isDelete;
    }
}