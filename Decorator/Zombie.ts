import { Enemy } from "./Enemy.ts";

export default class Zombie implements Enemy{
    takeDamage () : Number {
        return 10;
    }
};