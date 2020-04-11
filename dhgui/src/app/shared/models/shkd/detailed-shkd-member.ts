export class DetailedShkdMember {
    id: number;
    name: string;
    connectedChannels: number[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.connectedChannels = [];
    }
}
