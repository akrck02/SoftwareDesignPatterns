import Server from './Server.ts';
import Logger from './Logger.ts';
import FileWriter from './FileWriter.ts';


/*Get sample text lorem ipsum string array*/
const loremIpsum = [
    "Lorem ipsuum dolor sit amet,",
    "consectetur adipiscing elit, sed do eiusmod tempor ",
    "incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    "laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit",
    "esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident,",
    "sunt in culpa qui officia deserunt mollit anim id est laborum."
];

/*Create server*/
const server = new Server();

/*Create Logger*/
const logger = new Logger();

/*Create File writer*/
const fileWriter = new FileWriter();

/*Add logger and filewriter as server writers*/
server.addWriter(logger);
server.addWriter(fileWriter);

/*add each line to the buffer*/
loremIpsum.forEach(line => {
    server.addToBuffer(line as string);
});

/* Write buffer from server*/
server.writeBuffer();
