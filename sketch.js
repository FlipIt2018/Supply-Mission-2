var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var middleReds,leftReds,rightReds;
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
	
	var options = {
		isStatic: true
	}

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(250);
	
	middleReds=createSprite(400, 650, width/3,10);
	middleReds.shapeColor=color(255,0,0);

	leftReds=createSprite(260, 600, 15,100);
	leftReds.shapeColor=color(255,0,0);

	rightReds=createSprite(540, 600, 15,100);
	rightReds.shapeColor=color(255,0,0);


	engine = Engine.create();
	world = engine.world; 

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	middleReds = Bodies.rectangle(400, 650, width/3,10, {isStatic:true} );
	World.add(world, middleReds);

	leftReds = Bodies.rectangle(260, 600, 15,100, {isStatic:true} );
	World.add(world, leftReds);

	rightReds = Bodies.rectangle(540, 600, 15,100, {isStatic:true} );
	World.add(world, rightReds);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
 

 

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
  
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	   
	 }
   }






 
  
 
