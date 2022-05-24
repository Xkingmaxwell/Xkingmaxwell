const GRAVITY = 0.4;

class PlatformerGame extends Game {
    #player = null;
    #tiles = [];
    constructor() {
        super();

        this.#player = new Player(100, 100, 40);

        let floors = [];
        for (let i = 0; i < 20; ++i) {
            floors.push(new TileFloor(i * 70, 382, 70));
        }
        floors.push(new TileFloor(700, 240, 70));
        
        let walls = [];
       for (let i = 0; i < 2; ++i) {
         walls.push(new TileWall(700, 365 - (i * 70), 70));
        }

        this.#tiles = floors.concat(walls);
        let coin =[];

        coin.push(new Coin(20,210,30));
        coin.push(new Coin(150,210,30));
        coin.push(new Coin(250,300,30));
        coin.push(new Coin(450,300,30));
        coin.push(new Coin(650,300,30));
        coin.push(new Coin(850,300,30));
        coin.push(new Coin(1050,300,30));
        coin.push(new Coin(1250,300,30));
        


        loadJSON("assets/tiles.json", allFrames => {
            let frames = [];
            let spritesheet = null;
            let animation = null;

            frames = [
                allFrames[73]
            ];
            spritesheet = loadSpriteSheet('assets/tiles.png', frames);
            animation = loadAnimation(spritesheet);

            floors.forEach(tile => { 
                tile.addAnimation("floor", animation);
                tile.changeAnimation("floor");
            });

            frames = [
                allFrames[65]
            ];
            spritesheet = loadSpriteSheet('assets/tiles.png', frames);
            animation = loadAnimation(spritesheet);
            
            walls.forEach(tile => { 
                tile.addAnimation("floor", animation);
                tile.changeAnimation("floor");
            });
        });
    }

    get Player() { 
        return this.#player;
    }

    Update() { 
        translate(-this.#player.position.x + 400, 0);
        super.Update();
    }
}  