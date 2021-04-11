
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var world
var sling1
var sling2
var sling3
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Bar(400,250,230,20)
	groundObject=new Ground(width/2,670,width,20);

	//this is ball formation

ball1=new Newtonball(400,575,40);
ball2=new Newtonball(400,575,40);
ball3=new Newtonball(400,575,40);
ball4=new Newtonball(400,575,40);
ball5=new Newtonball(240,575,40);


//this is sling formation

sling1 = new Slingshot(ball1.body,box1.body,-80,0);
sling2=new Slingshot(ball2.body,box1.body, -40,0);
sling3=new Slingshot(ball3.body,box1.body,-60,0);
sling4=new Slingshot(ball4.body,box1.body,-50,0);
sling5=new Slingshot(ball5.body,box1.body,-90,0);


	Engine.run(engine);
  
}

//function keyPressed over here


function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-80,y:-85})
	}
	}
	

function draw() {
  rectMode(CENTER);
  background(0);

 // display function over here


  box1.display();
  groundObject.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display(); 

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}



