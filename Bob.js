class Bob {
    constructor (x, y, r,rgb) {
        var options = {
            isStatic : false,
            friction: 0.3,
            restitution: 0.6,
            density : 0.1
        };
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.rgb=rgb;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(this.rgb);
        ellipse(0, 0, this.r * 2);
        pop();
    }

}