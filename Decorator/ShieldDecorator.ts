import EnemyDecorator from "./EnemyDecorator.ts";
export default class ShieldDecorator extends EnemyDecorator{
    takeDamage(): Number {
        console.log('Shield stopped the attack!');
        return 0;
    }
}