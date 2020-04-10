import { LogicalChannel } from './logical-channel';
export class LogicalChannelPopupInit {
    title: string;
    isAdd: boolean;
    sourceChannel: LogicalChannel | null;

    constructor(title: string, isAdd: boolean, sourceChannel: LogicalChannel | null) {
        this.title = title;
        this.isAdd = isAdd;
        this.sourceChannel = sourceChannel;
    }
}