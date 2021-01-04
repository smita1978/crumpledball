
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p1,gr,dl,dr,db;
var pox=500;
var poy=590;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	gr=new Ground();
	dl=new Dustbin(pox,poy-10,20,110);
	dr=new Dustbin(pox+200,poy-10,20,110);
	db=new Dustbin(pox+100,poy+40,230,20);
	p1=new Paper(70,645,30);



	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  gr.display();
  dl.display();
  dr.display();
  db.display();
  p1.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p1.body,p1.body.position,{x:100,y:405});
	}
}

