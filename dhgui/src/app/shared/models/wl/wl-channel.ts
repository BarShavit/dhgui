export enum WLChannelStatus {
    Available,
    Strict,
    Failure
}

export class WLChannel {
    name: string;
    status: WLChannelStatus;
}