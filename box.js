class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(0);
        rect(0, 0, this.width, this.height);
        pop();
      }
      display(){
        if(this.body.speed <7.5){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke(0);
      fill("turquoise");
        rect(0, 0, this.width, this.height);
        pop();}
        else{
    world.remove(world,this.body);
    push();
    this.visibility = this.visibility - 5;
    pop();
        }
      }
}