var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	boxdown = createSprite(400,650,200,20,);
	boxside1 = createSprite(510,610,20,100,);
	boxside2 = createSprite(290,610,20,100,);
	boxdown.shapeColor = "red";
	boxside1.shapeColor = "red";
	boxside2.shapeColor = "red";

	boxdownBody = Bodies.rectangle(400,650,200,20,{isStatic:true});
	boxside1Body = Bodies.rectangle(510,610,20,100,{isStatic:true});
	boxside2Body = Bodies.rectangle(290,610,20,100,{isStatic:true});

	World.add(world,boxdownBody);
	World.add(world,boxside1Body);
	World.add(world,boxside2Body);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  

	rect(boxdownBody.position.x,boxdownBody.position.y,200,20);
	rect(boxside1Body.position.x,boxside1Body.position.y,20,100);
	rect(boxside2Body.position.x,boxside2Body.position.y,20,100);

	

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



