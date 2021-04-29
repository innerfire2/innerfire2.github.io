class Button {
    constructor (x, y, width, height, r, g, b, message, labeling) {

        //rectangle size
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //color
        this.r = r;
        this.g = g;
        this.b = b;

        //text
        this.message = message;
        this.labeling = labeling;
        this.textY = (this.y+this.height/2) - (this.labeling/2);
        
        this.state = "notPressed";
    }

    display () {
        push();
        fill(this.r, this.g, this.b);
        rect(this.x,this.y, this.width, this.height);
        pop();

        textAlign(CENTER);
        textSize(this.labeling);
        text (this.message, this.x, this.textY, this.width, this.height);
    }

    hitTest () {
        if (mouseX >= this.x && mouseX <= this.x+this.width && mouseY >= this.y && mouseY <= this.y+this.height && mouseIsPressed && this.state !== "pressed"){
            console.log(this.message);
            this.state = "pressed";
        }

        if (mouseIsPressed !== true) {
            this.state = "notPressed";
        }
    } 
}

let one = new Button (100, 100, 100, 100, 210, 210, 210, "hello", 30);
let two = new Button (220, 100, 100, 100, 180, 180, 180, "bonjour", 25);

function draw(){
one.display();
one.hitTest();

two.display();
two.hitTest();

}
