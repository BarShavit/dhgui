export class WanMember {
    id: number;
    name: string;
    isConnected: boolean;
    lastSeen: Date;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}