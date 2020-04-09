import { ChannelStatus } from '../ChannelStatus';

export class LogicalChannel {
    name: string;
    status: ChannelStatus;

    constructor() {
        this.name = "";
        this.status = ChannelStatus.Failure;
    }
}