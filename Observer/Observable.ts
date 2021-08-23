import Observer from './Observer.ts';

export default interface Observable {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}