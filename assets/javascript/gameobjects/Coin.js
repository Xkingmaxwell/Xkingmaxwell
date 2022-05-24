class Coin extends GameObject {
    constructor(x, y, size){

        super(x, y, size, size);


        loadJSON(

            "assets/sheet.json",

             (allFrames) => {

            let frames = [];

            let spritesheet = null;

            let animation = null;



            frames = [

                allFrames[36]

                

            ];

            spritesheet = loadSpriteSheet('assets/sheet.png', frames);

            animation = loadAnimation(spritesheet);

            this.addAnimation("goldCoin", animation);



            this.changeAnimation("goldCoin");

            

        });

       

    }



    Update(){


        if (this.animation){

            push();

            scale(0.3);

            this.animation.draw(0, 0);

            pop();

        }



    }



    // als de speler een coin aanraakt zal de coin moeten verdwijnen.

    Overlap(otherObject){

        if(otherObject instanceof Player){

            this.remove();  

        }

        

    }



}  


