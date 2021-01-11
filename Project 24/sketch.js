
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,paper,ground,body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var b = {
		isStatic:true
	}
	ground = Bodies.rectangle(width/2,400,20,10,b);
	World.add(world,ground);
	bin = new Bin(720,390,100,10);
	paper = new Paper(100,300,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bin.display();
  paper.display();
  ground.display();
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyFroce(paper.body,paper.body.position,{x:12 ,y:-13})
}
}
