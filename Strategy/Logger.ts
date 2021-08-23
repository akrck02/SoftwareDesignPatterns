import WriteStrategy from "./WriteStrategy.ts";

export default class Logger extends WriteStrategy{
    constructor() {
        super();
    }

    addLineToBuffer(data: string): void {
        this.buffer.push(data);
    }
    
    write(data: string): void {
        console.log("[LOG] " , data);
    }

    writeBuffer(): void {
        this.buffer.forEach(line => {
            this.write(line);
        });
    }

}