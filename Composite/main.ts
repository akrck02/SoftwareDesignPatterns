import Boss from './Boss.ts';
import Minion from './Minion.ts';

const miniboss = new Boss(1000, 0, 0);
const minionOne = new Minion(100, 0, 0);
const minionTwo = new Minion(100, 0, 0);

miniboss.addChild(minionOne);
miniboss.addChild(minionTwo);

console.log("\n\nMINIBOSS RUSH");
console.log("------------------------------------");
console.log("Boss appears!");

miniboss.showStats();
miniboss.moveLeft(300);
miniboss.showStats();


console.log("\n Game loop: \n---------------------");
miniboss.update();
miniboss.render();