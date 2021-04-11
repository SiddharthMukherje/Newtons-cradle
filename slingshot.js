class Slingshot{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
       
        this.sling = Constraint.create(options);

        

        World.add(world,this.sling);
    }

    display() {
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
        strokeWeight(10);
        var anker1x=pointA.x   
        var anker1y=pointA.y  
        
        var anker2x=pointB.x+this.offsetX
        var anker2y=pointB.y+this.offsetY
         line(pointA.x,pointA.y,pointB.x,pointB.y)
        
    }
}