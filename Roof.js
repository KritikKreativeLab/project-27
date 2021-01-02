class Roof {
    constructor(){
        var options = {
            isStatic : true
        };
        this.body = Bodies.rectangle(350, 80, 100, 200, options);
        World.add(world, this.body);
    }

    display(){
        
        rect(this.body.position.x, this.body.position.y, 450, 50);
    }
}