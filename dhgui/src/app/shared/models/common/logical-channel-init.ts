export class LogicalChannelPopupInit {
    title: string;
    isAdd: boolean;
    sourceChannelName: string;

    constructor(title: string, isAdd: boolean, sourceChannelName: string) {
        this.title = title;
        this.isAdd = isAdd;
        this.sourceChannelName = sourceChannelName;
    }
}