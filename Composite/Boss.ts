import GameObject from "./GameObject.ts";

export default class Boss implements GameObject {
  
  private hp = 0;
  private x = 0;
  private y = 0;
  private children : GameObject[] = [];

  constructor(hp : number, x : number, y : number) {
    this.hp = hp;
    this.x = x;
    this.y = y;
  }

  /* Move right x points */
  moveRight(x : number) {
    this.x += x;
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].moveRight(x);
    }
  }

  /* Move left x points */
  moveLeft(x : number) {
    this.x -= x;
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].moveLeft(x);
    }
  }

  /* Move up y points */
  moveUp(y : number) {
      this.y -= y;
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].moveUp(y);
      }
  }
  
  /* Move down y points */
  moveDown(y : number) {
      this.y += y;
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].moveDown(y);
      }
  }

  /* is dead */
  isDead(): boolean {
    return this.hp <= 0;
  }

  /*Add child*/
  addChild(child : GameObject) {
    this.children.push(child);
  }

  /*Remove child*/
  removeChild(child : GameObject) {
    this.children.splice(this.children.indexOf(child), 1);
  }

  /* Game loop stuff */
  update(): void {
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].update();
      }
  }

  render(): void {
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].render();
      }
  } 

  /*Show stats*/
  showStats(): void {

    console.log("\n BOSS STATS: \n---------------------");
    console.log("Boss: " + this.hp + " HP");
    console.log("Boss: " + this.x + " x");
    console.log("Boss: " + this.y + " y");
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].showStats();
    }
  }
  
}    
