export default interface GameObject {
   
    update() :void;
    render() :void;

    moveUp(d : number) :void;
    moveDown(d : number) :void;
    moveRight(d : number) :void;
    moveLeft(d : number) :void;

    showStats() :void;

}