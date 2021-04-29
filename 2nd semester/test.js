function hitTest () {
    if (mouseX >= this.x && mouseX <= this.x+this.widht && mouseY >= this.y && mouseY <= this.y+this.height && mouseIsPressed && this.state !== "pressed"){
        console.log(this.message);
        this.state = "pressed";
    }

    if (mouseIsPressed !== true) {
        this.state = "notPressed";
    }
}