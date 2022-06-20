class TileWall extends Tile {
    constructor(x, y, size) {
     super(x, y, size, size);
    }

    Update() {
        super.Update();
         rect(0, 0, this.width, this.height);
       if (this.animation)
            this.animation.draw(0, 0);
    }
}