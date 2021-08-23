import YoutubeChannel from './YoutubeChannel.ts';
import Subscriber from './Subscriber.ts';

let channel = new YoutubeChannel();
let subOne = new Subscriber(channel);
let subTwo = new Subscriber(channel);

channel.attach(subOne);
channel.attach(subTwo);

channel.addNewVideo('Minecraft 4k realistic Textures');