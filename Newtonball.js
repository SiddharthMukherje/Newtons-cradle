class Newtonball {
  constructor(x, y,r) {
    var options = {
        'restitution':1.3,
        'friction':0.0,
        'density':1.0,
        isStatic:false
    }
    this.body = Bodies.circle(x, y,r/2,options);
    this.r = r;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(5)
    stroke("red")
    fill(255);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
};
