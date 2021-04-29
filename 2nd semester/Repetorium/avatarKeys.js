function avatar (x,y,s) {
    angleMode(DEGREES);
    translate (x,y);
    scale (s);
    noStroke();

    //hair
    fill(252, 245, 40);
    ellipse(0,0, 130, 140);
    rect (-65, 0, 130, 150);

    //arms
    fill (255, 225, 194);
    quad(0, 100, -90, 200, -125, 200, -60, 80);
    quad(0, 100, 90, 200, 125, 200, 60, 80);

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

    //face
    fill (255, 225, 194);
    ellipse (0,10, 120, 130);

    //throat
    triangle(-30, 80, 30, 80, 0, 30);
    triangle(-30, 80, 30, 80, 0, 150);
    
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
    push();
    if (mouseIsPressed){
        fill (255);
        stroke(0);
        strokeWeight(2);
        arc (-25, 5, 31, 33, 35, -145);
        arc (25, 5, -31, 33, 35, -145);
    } else {
    fill(0);
    arc (-25, 5, 31, 33, 35, -145);
    triangle(-37, -3.4, -20, 1, -12.3, 13.9);
    arc (25, 5, -31, 33, 35, -145);
    triangle(37, -3.4, 20, 1, 12.3, 13.9);
    }
    pop();

    //nose
    fill(200, 45, 84);
    triangle (-10, 30, 10, 30, 0, 40);

}

let x = 150;
let y = 150;

function draw (){
 background (0);
avatar (x, y, 0.5);

//up
if (keyIsDown(38)){
    y -= 5;
}

//down
if (keyIsDown(40)){
    y+= 5;
}

//right
if (keyIsDown(39)){
    x+=5;
}

//left
if (keyIsDown(37)){
    x-=5;
}

}