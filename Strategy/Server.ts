import WriteStrategy from "./WriteStrategy.ts";

export default class Server {

    private Writers : WriteStrategy[] = [];

    addWriter(writer : WriteStrategy) {
        this.Writers.push(writer);
    }

    write(message : string) {
        this.Writers.forEach(writer => writer.write(message));
    }

    addToBuffer (message : string) {
        this.Writers.forEach(writer  => writer.addLineToBuffer(message));
    }

    writeBuffer() {
        this.Writers.forEach(writer => writer.writeBuffer());
    }

}