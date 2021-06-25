angleMode(DEGREES);
background (0);

class Avatar {
    constructor(x,y,s) {
        this.x = x;
        this.y = y;
        this.s = s;
    }

    hair() {
    fill(252, 245, 40);
    ellipse(0,0, 130, 140);
    rect (-65, 0, 130, 150);
    }

    arm () {
    fill (255, 225, 194);
    quad(0, 100, -90, 200, -125, 200, -60, 80);
    quad(0, 100, 90, 200, 125, 200, 60, 80);    
    }

    kimono() {
    //shirt
    fill(24, 40, 105);
    triangle(0,30, -80, 80, 80, 80);
    quad(-80, 80, 80, 80, 50, 200, -50, 200);

    //sleeve
    quad(-80, 80, -40, 140, -70, 190, -130, 140);
    quad(80, 80, 40, 140, 70, 190, 130, 140);

    //collar
    fill(200, 45, 84);
    triangle(-60, 80, 60, 80, 0, 180);
    triangle(-60, 80, 60, 80, 0, 40);
    }

    skin() {
    //face
    fill (255, 225, 194);
    ellipse (0,10, 120, 130);

    //throat
    triangle(-30, 80, 30, 80, 0, 30);
    triangle(-30, 80, 30, 80, 0, 150);
    }

    mask() {
        
     //ears
    fill (255);
    quad(-60, -100, -70, -40, -51, 10, -20, -30);
    quad(60, -100, 70, -40, 51, 10, 20, -30);

    //inner ears
    fill(200, 45, 84);
    quad(-55, -80, -65, -40, -48, 0, -20, -13);
    quad(55, -80, 65, -40, 48, 0, 20, -13);

    //mask
    fill (255);
    ellipse (0, 15, 105, 120);

    //eyes
    fill(0);
    arc (-25, 5, 31, 33, 35, -145);
    triangle(-37, -3.4, -20, 1, -12.3, 13.9);
    arc (25, 5, -31, 33, 35, -145);
    triangle(37, -3.4, 20, 1, 12.3, 13.9);

    //nose
    fill(200, 45, 84);
    triangle (-10, 30, 10, 30, 0, 40);
    }

    display () {
    translate (this.x,this.y);
    scale (this.s);
    noStroke();

    this.hair();
    this.arm();
    this.kimono();
    this.skin ();
    this.mask ();

    }
}

 
let me = new Avatar (200, 150, 1);
me.display();

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