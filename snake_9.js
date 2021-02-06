//settings
angleMode(DEGREES);


//functions

//visuals
function drawScore (){
  push();
  score = snakeLength - 1;
    textSize(30);
    textAlign(CENTER);
    fill (255);
    text (score, 445, 65);
    fill(64, 110, 61);
    textSize(15);
    text ("goal", 445, 100);
    text (goal-1, 445, 120);
    pop();
  }

function explanation (){

  fill(255);
  textSize(25);
  text("Can you help the hungry ekans to find some oran berries in the dark?", 450, 80, 300);
  text("Use your arrow keys to guide it!", 450, 215, 300);
  textSize(15);
  text("click on the title screen to start", 450, 300, 300);
}

function chooseAGoal (){
  push();
  textAlign(CENTER);
  fill(255);
  textFont("Consolas");
  textSize(25);
  text ("Choose a goal and press enter to start", 450, 80, 300);
  text (25, 450, 200, 300);
  text (75, 450, 250, 300);
  text (142, 450, 300, 300);
  pop();

  if (mouseX > 560 && mouseX < 620 && mouseY > 170 && mouseY < 210 && mouseIsPressed){
    goal = 26;
  }

  if (mouseX > 560 && mouseX < 620 && mouseY > 225 && mouseY < 260 && mouseIsPressed){
    goal = 76;
  }

  if (mouseX > 560 && mouseX < 620 && mouseY > 275 && mouseY < 310 && mouseIsPressed){
    goal = 143;
  }

  if (goal === 26){
    push();
    stroke(248,194,58);
    strokeWeight(5);
    fill(255,0);
    rect(560, 170, 65, 40);
    pop();
  }

  if (goal === 76){
    push();
    stroke(248,194,58);
    strokeWeight(5);
    fill(255,0);
    rect(560, 220, 65, 40);
    pop();
  }

  if (goal === 143){
    push();
    stroke(248,194,58);
    strokeWeight(5);
    fill(255,0);
    rect(560, 270, 65, 40);
    pop();
  }
}

function grass (x,y, s){
  push();
  translate(x,y);
  scale(s);
  stroke(1, 40, 28);
  strokeWeight(2);
  fill(2, 79, 56);
  rect (0,0, 50, 50);

  noStroke();
  fill(1, 40, 28);
  triangle(0, 50, 6, 30, 8, 50);
  triangle(6, 50, 15, 35, 18, 50);
  triangle(19, 50, 22, 40, 25, 50);
  triangle(26, 50, 29, 43, 32, 50);

  triangle(25, 25, 27, 16, 28, 25);
  triangle(30, 25, 34, 10, 36, 25);
  triangle(36, 25, 40, 14, 42, 25);

  pop();
}

function berry (x,y, s){
  push();
  translate(x,y);
  scale(s);
  
  fill(29, 99, 134);
  noStroke();
  strokeWeight(2);
  ellipse (25, 25, 48, 42);
  fill(51, 101, 138);
  ellipse (25, 25, 40, 32);
  fill(104, 161, 113);
  ellipse(25, 10, 25, 15);
  fill(130, 176, 137);
  ellipse(25, 6, 17, 10);
  pop();
}

function food() {
  berry(foodPosition.x, foodPosition.y, 0.5);
  for (let i = 0; i<= snakeLength; i++){
    if (positionX[i] === foodPosition.x && positionY[i] === foodPosition.y){
      foodPosition.x = Math.floor(random(2, 13)) * 25;
      foodPosition.y = Math.floor(random(2, 13)) * 25;
    }
  } 
}

function playground() {
  push();
  stroke(64, 110, 61);
  fill(2, 79, 56);
  while (chess.y <= 325) {
    chess.x = 50;
    while (chess.x <= 325) {
      grass(chess.x, chess.y, 0.5);
      chess.x = chess.x + 25;
    }
    chess.y = chess.y + 25;
    chess.x = 50;
  }

  if (chess.y > 300) {
    chess.y = 50;
  }
  pop();
}

function snakePartStraight (x,y,rotation,shift,s){
push();
translate (x+shift,y);
scale (s);
rotate(rotation);
noStroke();
fill (snakeMainColor.r, snakeMainColor.g, snakeMainColor.b);
rect (0, 12.5, 50, 25);
pop();
}

function snakePartCurve (x,y,rotation,shiftX, shiftY, s){
push();
translate(x+shiftX, y+shiftY);
scale (s);
rotate(rotation);
noStroke();
fill (snakeMainColor.r, snakeMainColor.g, snakeMainColor.b);
arc (0,0, 75, 75, 0, 90);
fill (2, 79, 56);
arc (0,0, 25, 25, 0, 90);
pop();
}

function tail (x,y,rotation, shiftX, shiftY, s){
push();
translate(x+shiftX, y+shiftY);
rotate(rotation);
scale (s);
noStroke();
fill (snakeMainColor.r, snakeMainColor.g, snakeMainColor.b);
arc (50, 25, 35, 25, 90, 270);
fill(snakeColor2.r, snakeColor2.g, snakeColor2.b);
ellipse (38, 25, 22);
ellipse (28, 25, 20);
ellipse (18, 25, 15);
pop();
}

function head (x,y, rotation, shiftX, shiftY, s){
push();
translate(x+shiftX, y+shiftY);
scale (s);
rotate(rotation);
noStroke();
fill (snakeMainColor.r, snakeMainColor.g, snakeMainColor.b);
rect (0, 12.5, 15, 25);
ellipse (27, 25, 45, 31);
fill(snakeColor2.r, snakeColor2.g, snakeColor2.b);
rect (1,12.5, 8, 25);
ellipse (33, 17, 9, 8);
ellipse (33, 34, 9, 8);
pop();
}

function headTiltedLeft (x,y, rotation, shiftX, shiftY, s){
  push();
  translate(x+shiftX, y+shiftY);
  rotate(rotation);
  scale (s);
  noStroke();
    
  push();
  translate(27, 23);
  rotate(-30);
  fill (snakeMainColor.r, snakeMainColor.g, snakeMainColor.b);
  ellipse (0, -3, 45, 31);
  fill(snakeColor2.r, snakeColor2.g, snakeColor2.b);
  ellipse (6, -12, 9, 8);
  ellipse (6, 6, 9, 8);
  pop();

  fill (snakeMainColor.r, snakeMainColor.g, snakeMainColor.b);
  rect (0, 12.5, 15, 25);
  fill(snakeColor2.r, snakeColor2.g, snakeColor2.b);
  rect (1,12.5, 8, 25);
  pop();
}

function headTiltedRight (x,y, rotation, shiftX, shiftY, s){
  push();
  translate(x+shiftX, y+shiftY);
  rotate(rotation);
  scale (s);
  noStroke();
    
  push();
  translate(27, 32);
  rotate(30);
  fill (snakeMainColor.r, snakeMainColor.g, snakeMainColor.b);
  ellipse (0, -3, 45, 31);
  fill(snakeColor2.r, snakeColor2.g, snakeColor2.b);
  ellipse (6, -12, 9, 8);
  ellipse (6, 6, 9, 8);
  pop();

  fill (snakeMainColor.r, snakeMainColor.g, snakeMainColor.b);
  rect (0, 12.5, 15, 25);
  fill(snakeColor2.r, snakeColor2.g, snakeColor2.b);
  rect (1,12.5, 8, 25);
  pop();
}

function drawSnakeHead (){
  push();
  //head tilted conditions

  if (game === "lost"){
// up right
if (currentSpeedX[0]=== 25 && currentSpeedY[1] === -25){
  headTilted = true;
  headTiltedRight (snakePosition.x, snakePosition.y, 270,0,25,0.5); 
}
// up left
if (currentSpeedX[0] === -25 && currentSpeedY[1] === -25){
  headTilted = true;
  headTiltedLeft (snakePosition.x, snakePosition.y, 270,0,25,0.5);
}
// down right
if (currentSpeedX[0]=== 25 && currentSpeedY[1] === 25){
  headTilted = true;
  headTiltedLeft (snakePosition.x, snakePosition.y, 90,25,0,0.5);
}
//down left
if (currentSpeedX[0]=== -25 && currentSpeedY[1] === 25){
  headTilted = true;
  headTiltedRight (snakePosition.x, snakePosition.y, 90,25,0,0.5);
}
// right up
if (currentSpeedY[0]=== -25 && currentSpeedX[1]=== 25){
  headTilted = true;
  headTiltedLeft (snakePosition.x, snakePosition.y, 0,0,0,0.5);
}
// right down
if (currentSpeedY[0]=== 25 && currentSpeedX[1]=== 25){
  headTilted = true;
  headTiltedRight (snakePosition.x, snakePosition.y, 0,0,0,0.5);
}
// left up
if (currentSpeedY[0]=== -25 && currentSpeedX[1]=== -25){
  headTilted = true;
  headTiltedRight (snakePosition.x, snakePosition.y, 180,25,25,0.5);
}
// left down
if (currentSpeedY[0]=== 25 && currentSpeedX[1]=== -25){
  headTilted = true;
  headTiltedLeft (snakePosition.x, snakePosition.y, 180,25,25,0.5);
}
  }

  if(headTilted === false){

if (currentSpeedX[0] === 25){
  head(snakePosition.x, snakePosition.y, 0, 0, 0, 0.5);
}
if (currentSpeedY[0] === 25){
  head(snakePosition.x, snakePosition.y, 90, 25, 0, 0.5);
}
if (currentSpeedY[0] === -25){
  head(snakePosition.x, snakePosition.y, 270, 0, 25, 0.5);
}
if (currentSpeedX[0] === -25){
  head(snakePosition.x, snakePosition.y, 180, 25, 25, 0.5);
}
}
pop();
}

//engine

function changingDirections() {

  if (keyIsDown(39) && movement !== "left" && currentSpeedX[0] !== -25
  ) {
    movement = "right";
  }

  if (keyIsDown(37) && movement !== "right" && currentSpeedX[0] !== 25
  ) {
    movement = "left";
  }

  if (keyIsDown(38) && movement !== "down" && currentSpeedY[0] !== 25
  ) {
    movement = "up";
  }

  if (keyIsDown(40) && movement !== "up" && currentSpeedY[0] !== -25
  ) {
    movement = "down";
  }
}

function eatingFood (){
   //eating food
   if (
    snakePosition.x === foodPosition.x &&
    snakePosition.y === foodPosition.y
  ) {
    foodPosition.x = Math.floor(random(2, 13)) * 25;
    foodPosition.y = Math.floor(random(2, 13)) * 25;

    snakeLength += 1;
  }
  
  //checking if food is generated under the snake
    for (let i = 1; i< snakeLength+1; i++){
      if (positionX[i] === foodPosition.x && positionY[i] === foodPosition.y){
        foodPosition.x = Math.floor(random(2, 13)) * 25;
        foodPosition.y = Math.floor(random(2, 13)) * 25;
        i = 0;
      }
    }
}

function drawSnake (){
  push();
   
       //size of the snake
       for (let i = 1; i < snakeLength; i++) {
        if (game !== "lost"){

          arrayVariable = i-1;

        } else {
          //setting the snake one step back if game = lost
          arrayVariable = i;
        }

         //rr,ll
         if (currentSpeedX[arrayVariable+1] === 25 && currentSpeedX[arrayVariable] === 25 || currentSpeedX[arrayVariable+1] === -25 && currentSpeedX[arrayVariable] === -25){
          snakePartStraight(positionX[arrayVariable], positionY[arrayVariable], 0, 0, 0.5);
         }
         //ru,dl
         if (currentSpeedX[arrayVariable+1] === 25 && currentSpeedY[arrayVariable] === -25 || currentSpeedY[arrayVariable+1] === 25 && currentSpeedX[arrayVariable] === -25){
          snakePartCurve(positionX[arrayVariable], positionY[arrayVariable], 0, 0, 0, 0.5);
         }
         //rd,ul
         if (currentSpeedX[arrayVariable+1] === 25 && currentSpeedY[arrayVariable] === 25 || currentSpeedY[arrayVariable+1] === -25 && currentSpeedX[arrayVariable] === -25){
          snakePartCurve(positionX[arrayVariable], positionY[arrayVariable], 270, 0, 25, 0.5);
         }
         //ur,ld
         if (currentSpeedY[arrayVariable+1] === -25 && currentSpeedX[arrayVariable] === 25 || currentSpeedX[arrayVariable+1] === -25 && currentSpeedY[arrayVariable] === 25){
          snakePartCurve(positionX[arrayVariable], positionY[arrayVariable], 180, 25, 25, 0.5);
         }
         //uu,dd
         if (currentSpeedY[arrayVariable+1] === -25 && currentSpeedY[arrayVariable] === -25 || currentSpeedY[arrayVariable+1] === 25 && currentSpeedY[arrayVariable] === 25){
          snakePartStraight(positionX[arrayVariable], positionY[arrayVariable], 90, 25, 0.5);
         } 
         //lu,dr
         if (currentSpeedX[arrayVariable+1] === -25 && currentSpeedY[arrayVariable] === -25 || currentSpeedY[arrayVariable+1] === 25 && currentSpeedX[arrayVariable] === 25){
          snakePartCurve(positionX[arrayVariable], positionY[arrayVariable], 90, 25, 0, 0.5);
         }
      }
      
    if (game !== "lost"){

    drawSnakeHead();

      // tail
      if (currentSpeedX[snakeLength-1] === 25){
        tail(positionX[snakeLength-1], positionY[snakeLength-1], 0, 0, 0, 0.5);
      }
      if (currentSpeedX[snakeLength-1] === -25){
        tail(positionX[snakeLength-1], positionY[snakeLength-1], 180, 25, 25, 0.5);
      }
      if (currentSpeedY[snakeLength-1] === -25){
        tail(positionX[snakeLength-1], positionY[snakeLength-1], 270, 0, 25, 0.5);
      }
      if (currentSpeedY[snakeLength-1] === 25){
        tail(positionX[snakeLength-1], positionY[snakeLength-1], 90, 25, 0, 0.5);
      }
    } else {
      // game is lost
      snakePosition.x = positionX[0];
      snakePosition.y = positionY[0];
      drawSnakeHead();

      if (currentSpeedX[snakeLength] === 25){
        tail(positionX[snakeLength], positionY[snakeLength], 0, 0, 0, 0.5);
      }
      if (currentSpeedX[snakeLength] === -25){
        tail(positionX[snakeLength], positionY[snakeLength], 180, 25, 25, 0.5);
      }
      if (currentSpeedY[snakeLength] === -25){
        tail(positionX[snakeLength], positionY[snakeLength], 270, 0, 25, 0.5);
      }
      if (currentSpeedY[snakeLength] === 25){
        tail(positionX[snakeLength], positionY[snakeLength], 90, 25, 0, 0.5);
      }
    }
    pop();
    }


//background
let chess = { x: 0, y: 0 };

//snake Design
let snakeMainColor = {r:112, g:51, b:112};
let snakeColor2 = {r:248, g:194, b:58};
let headTilted = false;


//snake engine
let snakePosition = { x: 75, y: 50 };
let positionX = [snakePosition.x-25];
let positionY = [snakePosition.y];
let snakeLength = 1;

//movement 
let speed = { x: 0, y: 0 };
let movement = "right";
let currentSpeedX = [25]; 
let currentSpeedY = [0];

//food
let foodPosition = {
  x: Math.floor(random(2, 13)) * 25,
  y: Math.floor(random(2, 13)) * 25,
};

//score
let score;
let highscore = [0];
let goal = 26;

//gamescreens
let game = "lost";

//images
let title = loadImage("pictures/title.png");
let scoreFrame = loadImage("pictures/score.png");
let lose = loadImage ("pictures/lose.png");
let win = loadImage("pictures/win.png");
let frame = loadImage ("pictures/frame.png");
let highscoreFrame = loadImage ("pictures/highscore.png");

function draw() {
clear();
background(17, 15, 46);

  if (game === "title"){
    image(title, -10, -20, 450, 450);
    if (mouseX > 50 && mouseX <370 && mouseY > 50 && mouseY < 350 && mouseIsPressed){
  game = "standby";
}
explanation();
  }

  if (game === "standby"){
    chooseAGoal();
  }
  
if (game !== "title") {

  //game engine
  changingDirections();
  eatingFood();
  
  //visuals
  playground();
  drawSnake();
  food(); 
  image(frame, -100,-115, 590, 635);
   
}

//starting the game
  if (game === "standby" && keyIsDown(13)) {
    game = "running";
  }

//game running
  if (game === "running"){ 

  image(scoreFrame, 400, 10, 90, 90);
  drawScore(); 

//right
    if (movement === "right") {
      speed.y = 0;
      speed.x = 25;
    }
//left
    if (movement === "left") {
      speed.y = 0;
      speed.x = -25;
    }
//up
    if (movement === "up") {
      speed.x = 0;
      speed.y = -25;
    }
//down
    if (movement === "down") {
      speed.x = 0;
      speed.y = 25;
    }

  if (frameCount % 7 === 0) {

    positionX.unshift(snakePosition.x); 
    if (positionX.length > snakeLength+1) {
      positionX.pop();
    }

    positionY.unshift(snakePosition.y);
    if (positionY.length > snakeLength+1) {
      positionY.pop();
    }

    snakePosition.x += speed.x;
    snakePosition.y += speed.y; 
    
    currentSpeedX.unshift(speed.x);
    if (currentSpeedX.length > snakeLength+1) {
      currentSpeedX.pop();
   }

   currentSpeedY.unshift(speed.y);
   if (currentSpeedY.length > snakeLength+1){
     currentSpeedY.pop();
   }
  }
}

  //losing

  //out of the canvas
  if (
    snakePosition.x < chess.x ||
    snakePosition.x > 325 ||
    snakePosition.y < chess.y ||
    snakePosition.y > 325
  ) {
    speed.x = 0;
    speed.y = 0;
    game = "lost";
  }

  //eating itself
  for (let i = 1; i<= snakeLength; i++){
    if (positionX[i] === snakePosition.x && positionY[i] === snakePosition.y){
      game = "lost";
    }
  }

  //losing screen
  if (game === "lost"){
  image(lose, 380, 10, 400, 400);

  fill(17, 15, 46, 130);
  rect(50, 50, 300, 300);
  image(frame, -100,-115, 590, 635);
  push();
  translate(118, 50);
  scale(0.35);
  image(highscoreFrame, 0, 0);
  pop();

  //highscores
      if (score > highscore[0]){
        highscore.unshift(score);
      }
      if (score < highscore[0] && score > highscore[1]){
        highscore.splice(1, 0, score);
      }
      if (score > highscore[2] && score < highscore[1]){
        highscore.splice(2, 0, score);
      }
      if (highscore.length > 3){
        highscore.pop();
      }
      fill(255);
      textSize(35);
      textAlign(CENTER);
      text(highscore[0], 200, 170);
      text(highscore[1], 200, 220);
      text(highscore[2], 200, 270);
     push();
fill(255);
textAlign(CENTER);
textSize(15 );
text ("press space to restart", 200, 342);
pop();

    }

   

//winning
if (snakeLength === goal){
  game = "won";
}

//winning screen
if (game === "won"){
image(win, 390, -10, 440, 440);
push();
fill(255);
textAlign(CENTER);
textSize(20);
text ("press space to restart", 200, 200);
pop();
}

if (game === "lost"||game === "won"){

}

 //restart
  if (game === "lost" && keyIsDown(32) || game === "won" && keyIsDown(32)) {
    game = "standby";
    snakePosition.x = 75;
    snakePosition.y = 50;
    snakeLength = 1;
    movement = "right";
    speed.x = 0;
    speed.y = 0;
    positionX = [snakePosition.x-25];
    positionY = [snakePosition.y];
    currentSpeedX = [25];
    currentSpeedY = [0];
    headTilted = false;
  }
} 