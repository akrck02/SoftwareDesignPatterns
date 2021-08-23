import Observable from './Observable.ts';
import Observer from './Observer.ts';

export default class YoutubeChannel implements Observable {

    private channelSubscribers: Observer[] = [];
    private lastVideoPosted: string;

    constructor() {
        this.lastVideoPosted = "";
    }

    attach(observer: Observer): void {
        this.channelSubscribers.push(observer);
    }

    detach(observer: Observer): void {
        
    }

    lastVideoTitle(): string {
        return this.lastVideoPosted;
    }

    addNewVideo(title : string): void {
        this.lastVideoPosted = title;
        this.notify();
        console.log(`New video added to the channel: ${title}`);
    }

    notify(): void {
        for(const suscriptor of this.channelSubscribers) {
            suscriptor.update();
        }
    }
}