import Observer from './Observer.ts';
import YoutubeChannel from './YoutubeChannel.ts';

export default class Subscriber implements Observer {

    private observable;

    constructor(o : YoutubeChannel) {
        this.observable = o;
    }
    
    update(): void {
        console.log('New video posted!', this.observable.lastVideoTitle());
    }
}