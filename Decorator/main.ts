import Zombie from "./Zombie.ts";
import ShieldDecorator from "./ShieldDecorator.ts";

console.log("ZOMBIE GAME v0.1");
console.log("---------------------------");



/* Create an enemy */
console.log("Zombie spawned.");
let enemy = new Zombie();

/* Get damage */
console.log("you attack!");
let totalDamage = enemy.takeDamage();

/* log total damage */
console.log("Total damage: " + totalDamage);

/*Wear a shield */
console.log("\nZombie is now protected by a shield!");
console.log("---------------------------------------");

enemy = new ShieldDecorator(enemy);

/* Get damage */
console.log("you attack!");
totalDamage = enemy.takeDamage();

/* log total damage */
console.log("Total damage: " + totalDamage);