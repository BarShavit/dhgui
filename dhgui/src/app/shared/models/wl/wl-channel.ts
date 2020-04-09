import { ChannelStatus } from '../ChannelStatus';

export class WLChannel {
    name: string;
    status: ChannelStatus;

    constructor() {
        this.name = "";
        this.status = ChannelStatus.Failure;
    }
}