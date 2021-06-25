import Button from "./Button.js";

export default class TimeGame {
    constructor(){
        //states
        this.buttonState = "";

        this.foodbag = {
            x: 50,
            y: 50
        };

        this.food = {
            y: 52
        };
        
        //lifePoint variables
        this.lifePoints = 3;
        this.lifePointY = 0;

        //images
        this.foodBowlForeground = loadImage ("assets/foodBowlForeground.png");
        this.foodBowlBackground = loadImage ("assets/foodBowlBackground.png");
        this.foodBagPicture = loadImage ("assets/foodBag.png");
        this.foodPicture = loadImage ("assets/food.png");
        this.lifePoint = loadImage ("assets/lifePoint.png");

        //objects
        this.foodButton = new Button(150, 320, 100, 50);

        //animation
        this.foodbagAnimation =  
            gsap.to(this.foodbag, {
                duration: 1.5,
                ease: "easeOut",
                x: 280,
                yoyo: true,
                yoyoEase: true,
                repeat: -1,
            });

        this.foodAnimation =
            gsap.to(this.food, {
                duration: 1,
                ease: "linear",
                y: 300,
                paused: true,
            });
    }
    
    bagAnimation(){
        this.foodbagAnimation.play();
    }
    
    button(){

       if (this.foodButton.hitTest()){
            this.foodbagAnimation.pause();
            this.foodAnimation.play();
        }
        
        this.buttonState = "clicked";
    }

    display(){
        
        //foodBowl Background
        image (this.foodBowlBackground, 150, 320, 100, 50);

        //food
        image (this.foodPicture, this.foodbag.x + 10, this.food.y, 50, 50);

        //foodbag
        image (this.foodBagPicture, this.foodbag.x, this.foodbag.y, 70, 70);

        //foodbowl Foreground
        image (this.foodBowlForeground, 150, 320, 100, 50);

        //lifePoints
        for (this.lifePointY = 0; this.lifePointY < this.lifePoints * 30; this.lifePointY+=30){
            image (this.lifePoint, 320, 250 + this.lifePointY, 30, 30);
             }
            
    }

    winning(){

        if (this.food.y >= 300){

            if (this.foodbag.x >= 140 && this.foodbag.x <= 190){
                return true;
            } else {
                return false;
            }
        }
    }

    noMoreLifePoints(){

        if (this.lifePoints === -1) {
            return true;
        }
    }

    resetWhenLosing (){

        if (this.winning() === false){
            this.buttonState = "";
            this.lifePoints -= 1;
           
            //animations
            this.foodbagAnimation.play();
            this.food.y = 52;
            this.foodAnimation.restart();
            this.foodAnimation.pause();
        }
    }

    resetWhenWinning(){

           //states
           this.buttonState = "";

           //position of food and foodbag
           this.foodbag.x = 50;
           this.foodbag.y = 50;
           
           this.food.y = 52;
           
           //lifePoint variables
           this.lifePoints = 3;
           this.lifePointY = 0;

           //animations
           this.foodbagAnimation.play();
           this.foodAnimation.restart();
           this.foodAnimation.pause();
    }
}