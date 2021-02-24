
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundObject,DUSTBIN;	
var world,paper;



function setup() {
	createCanvas(800,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;



	
	
	DUSTBIN=new dustbin(670,620,20,100);
	paper=new Paper(100,570,50,30);
	groundObject=new ground(400,650,800,20)

  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  if(keyCode=== UP_ARROW)
  {
  Matter.Body.applyForce(paper.body, paper.body.position,{x:30,y:-30});
  
  }  
  
  groundObject.display();
  DUSTBIN.display();
  paper.display();

 
 drawSprites();

}



