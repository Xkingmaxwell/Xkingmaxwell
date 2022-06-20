class Tile extends GameObject {
    #feet = null;
    constructor(x, y, width , height) {
        super(x, y, width , height, true);
        // this.debug = true;
        this.setCollider("rectangle");
    }
}