import { TagamLogicalChannel } from './logical-channel';

export enum TagamStatus {
    free,
    sending,
    receiving,
    failure
}

export class TagamPhysicalChannel {
    computerName: string;
    channel: number;
    logicalChannels: TagamLogicalChannel[];
    status: TagamStatus;
}