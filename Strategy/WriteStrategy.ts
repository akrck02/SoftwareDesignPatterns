export default abstract class WriteStrategy {

    protected buffer : string[];
    
    constructor() {
        this.buffer = [];
    }

    abstract addLineToBuffer(data: string): void;
    abstract write(data: string): void;
    abstract writeBuffer(): void;

}
