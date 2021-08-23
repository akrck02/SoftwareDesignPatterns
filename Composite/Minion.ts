import GameObject from "./GameObject.ts";

export default class Minion implements GameObject {
  private hp = 0;
  private x = 0;
  private y = 0;

  constructor(hp: number, x: number, y: number) {
    this.hp = hp;
    this.x = x;
    this.y = y;
  }

  /* Game loop stuff */
  update(): void { console.log("Minion update"); }
  render(): void { console.log("Minion render"); }

  /* Move right */
  moveRight(d: number): void {
    this.x += d;
  }

  /* Move left */
  moveLeft(d: number): void {
    this.x -= d;
  }

  /* Move up */
  moveUp(d: number): void {
    this.y -= d;
  }

  /* Move down */
  moveDown(d: number): void {
    this.y += d;
  }

  showStats(): void {
    console.log("\n MINION STATS: \n---------------------");
    console.log("Minion: " + this.hp + " HP");
    console.log("Minion: " + this.x + " x");
    console.log("Minion: " + this.y + " y");
  }
}
