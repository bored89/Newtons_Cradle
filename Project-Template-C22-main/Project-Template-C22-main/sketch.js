const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;




function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	var balloptions={
		restitution: 1.35,
		isStatic:false
	}
  bob1 = Bodies.circle (400,400,20,balloptions)
  bob2 = Bodies.circle (450,400,20,balloptions)
  bob3 = Bodies.circle (500,400,20,balloptions)
  bob4 = Bodies.circle (350,400,20,balloptions)
  bob5 = Bodies.circle (300,400,20,balloptions)

  bobi=Matter.Constraint.create({
    pointA: {x:400,y:100},
    bodyB:bob1,
    length:300,
    stiffness:0.32
      });

      loli=Matter.Constraint.create ({
        pointA: {x:450,y:100},
        bodyB:bob2,
      
        length:300,
        stiffness:0.32
      });
      zoli=Matter.Constraint.create ({
        pointA: {x:500,y:100},
        bodyB:bob3,
      
        length:300,
        stiffness:0.32
      });
      coli=Matter.Constraint.create ({
        pointA: {x:350,y:100},
        bodyB:bob4,
      
        length:300,
        stiffness:0.32
      });
      moli=Matter.Constraint.create ({
        pointA: {x:300,y:100},
        bodyB:bob5,
      
        length:300,
        stiffness:0.32
      });
      World.add (world,bobi);
      World.add (world,loli);
      World.add (world,zoli);
      World.add (world,coli);
      World.add (world,moli);
  World.add (world,bob1)
  World.add (world,bob2)
  World.add (world,bob3)
  World.add (world,bob4)
  World.add (world,bob5)

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  ellipse (bob1.position.x,bob1.position.y,50,50)
  ellipse (bob2.position.x,bob2.position.y,50,50)
  ellipse (bob3.position.x,bob3.position.y,50,50)
  ellipse (bob4.position.x,bob4.position.y,50,50)
  ellipse (bob5.position.x,bob5.position.y,50,50)
  push ();
  strokeWeight (3.5);
  stroke ("orange")
  line (bobi.pointA.x,bobi.pointA.y,bob1.position.x,bob1.position.y)
  line (loli.pointA.x,loli.pointA.y,bob2.position.x,bob2.position.y)
  line (zoli.pointA.x,zoli.pointA.y,bob3.position.x,bob3.position.y)
  line (coli.pointA.x,coli.pointA.y,bob4.position.x,bob4.position.y)
  line (moli.pointA.x,moli.pointA.y,bob5.position.x,bob5.position.y)

  pop ();
  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed (){
  if (keyCode == UP_ARROW){
    Matter.Body.applyForce (bob5,{x:0,y:0},{x:-0.06,y:0})

  }
}