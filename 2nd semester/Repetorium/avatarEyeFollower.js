function avatar (x,y,s,r) {
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
    fill(0);
    arc (-25, 5, 31, 33, 35, -145);
    triangle(-37, -3.4, -20, 1, -12.3, 13.9);
    arc (25, 5, -31, 33, 35, -145);
    triangle(37, -3.4, 20, 1, 12.3, 13.9);

    //rotation
    leftR = Math.atan2(5+y - mouseY, -25+x - mouseX) * 180 / Math.PI;

    rightR = Math.atan2(5+y - mouseY, 25+x - mouseX) * 180 / Math.PI;
    //left pupil
    push();
    translate(-25,5);
    rotate(leftR);
    fill (255);
    ellipse(-6, 2, 10); 
    pop();

    //left pupil
    push();
    translate(25, 5);
    rotate (rightR);
    fill (255);
    ellipse(-6, 2, 10);
    pop();

   
    //nose
    fill(200, 45, 84);
    triangle (-10, 30, 10, 30, 0, 40);

}
 
function draw (){
 background (0);
avatar (200, 150, 1);

}