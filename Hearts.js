export default class Hearts {
    constructor(){
        this.hearts = 0;
        this.heartsX = 0;
        this.emptyHeart = loadImage ("assets/emptyHeart.png");
        this.fullHeart = loadImage("assets/fullHeart.png");
    }

    display(){

        //empty hearts
        for (this.heartsX = 0; this.heartsX < 40 * 5; this.heartsX += 40){
            image (this.emptyHeart, 180 + this.heartsX, 20, 40, 40);
        
             }
        
        //full hearts
        for (this.heartsX = 0; this.heartsX < 40 * this.hearts; this.heartsX += 40){
            image (this.fullHeart, 180 + this.heartsX, 20, 40, 40);
        }
    }

    addingHearts(){

        this.hearts++;
        
    }

    destroyingHearts(){
        
        if (this.hearts !== 0){
            this.hearts--;
        }
 
    }

    heartsFull(){
        if (this.hearts === 5){
            return true;
        }
    }

}