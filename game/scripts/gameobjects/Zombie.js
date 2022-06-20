class Zombie extends GameObject {
    #player = null;
    #playerPos = null;

    constructor(x, y, size, player) {
        super(x, y, size, size);

        this.#player = player;
        this.#playerPos = this.#player.position.copy();
    }

    get Player() {
        return this.#player;
    }

    set PlayerPos(value) {
        this.#playerPos = value;
    }
// zombies in shape an de dhv een figuur//
    Update() {
        fill(0, 255, 255);

        circle(0, 0, 300, 800);

        this.PlayerPos = this.Player.position.copy();

        let direction = p5.Vector.sub(this.#playerPos, this.position);

        let dirAngle = direction.heading();
     
        let dirAngleDegrees = degrees(dirAngle);
     
        this.setSpeed(5, dirAngleDegrees);

    }
}