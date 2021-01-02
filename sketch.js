
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
	
	roof = new Roof();
  bob1 = new Bob(210, 200, 40,"blue"); 
  bob2 = new Bob(130, 200, 40,"green");
  bob3 = new Bob(50, 200, 40,"red"); 
  bob4 = new Bob(290, 200, 40,"yellow"); 
  bob5 = new Bob(-25, 200, 40,"pink"); 

	chain1 = new Chain(bob1.body, roof.body, 80, 0);
  chain2 = new Chain(bob2.body, roof.body, 0, 0);
  chain3 = new Chain(bob3.body, roof.body, -80, 0);
  chain4 = new Chain(bob4.body, roof.body, 160, 0);
  chain5 = new Chain(bob5.body, roof.body, -160, 0);

  Engine.run(engine);
  
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Body.applyForce(bob5.body, bob5.body.position, {x:-30, y:10});
	}
	
}


function draw() {
  rectMode(CENTER);
  background(175);
  
  roof.display();
  bob1.display();
  chain1.display();

  bob2.display();
  chain2.display();

  bob3.display();
  chain3.display();

  bob4.display();
  chain4.display();

  bob5.display();
  chain5.display();

  drawSprites();
 
}



