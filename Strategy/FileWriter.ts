import WriteStrategy from "./WriteStrategy.ts";

export default class FileWriter extends WriteStrategy{
    constructor() {
        super();
    }

    addLineToBuffer(data: string): void {
        this.buffer.push(data);
    }
    
    write(data: string): void {
        console.log("Writting on File: " , data);
    }

    writeBuffer(): void {
        this.buffer.forEach(line => {
            this.write(line);
        });
    }
    
}