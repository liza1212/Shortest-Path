class Node{
    constructor(x, y, val, color) {
        this.x = x;
        this.y = y;
        this.val = val;
        this.color = color;
    }
    getX() {
        return this.x
    }
    getY() {
        return this.y
    }
    display() {
        fill(this.color)
        noStroke()
        ellipse(this.x, this.y, 50, 50)
        fill(0,0,255)
        textSize(20)
        text(this.val, this.x-7, this.y+7)
    }
    isPressed() {
        let distance = dist(mouseX, mouseY, this.x, this.y)
        if (distance < 25)
            return true;
        else
            return false;
    }
    getValue() {
        return this.val;
    }
    outline(){
        noFill()
        strokeWeight(1)
        ellipse(this.x, this.y, 60, 60)
    }
}