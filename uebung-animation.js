import gsap from "./gsap.min.js";

const ball = {
    x: 50,
    y: 50 
};




function draw(){
    clear();
    ellipse(ball.x, ball.y, 50, 50);
}

function myAnimation(){
gsap.to(ball, {
    duration: 1.5,
    ease: "linear",
    x: 400,
    onComplete: () => {
        gsap.to(ball, {
            duration: 2,
            ease: "easeOut",
            x: 50,
            y: 300,
            onComplete: () =>{
                gsap.to(ball, {
                    duration: 2,
                    ease: "easeIn",
                    y: 50,
                    onComplete: () => {
                        myAnimation();
                    }
                });
            }
        });
    }
    });
}

myAnimation();

