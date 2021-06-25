export default class Button {
    constructor (x, y, width, height) {

        //rectangle size
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
    }

    display () {
        push();
        fill (0,0,0,0);
        strokeWeight(3);
        stroke (0);
        rect(this.x,this.y, this.width, this.height);
        pop();
    }

    hitTest () {
        if (mouseX >= this.x && mouseX <= this.x+this.width && mouseY >= this.y && mouseY <= this.y+this.height){
            return true;
        } else {
            return false;
        }
    } 
}

