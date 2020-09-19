
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var stone,sling;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,670,800,20);
	tree=loadImage('tree.png');
	boy=loadImage('boy.png');
	mango1=new Mango(650,300,50);
	mango2=new Mango(560,300,50);
	mango3=new Mango(600,370,50);
	mango4=new Mango(510,360,50);
	mango5=new Mango(700,370,50);
	mango6=new Mango(750,420,50);
	mango7=new Mango(490,420,50);
	mango8=new Mango(640,420,50);
	mango9=new Mango(570,440,50);

	stone=new Stone(150,520,50);

	sling=new SlingShot(stone.body,{x:150,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  image(boy,120,450,boy.width/9,boy.height/9)
  image(tree,300,250,tree.width/2,tree.height/3);

 
 
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone.display();
  sling.display();

  /*detectollision(stone.mango1);
  detectollision(stone.mango2);
  detectollision(stone.mango3);
  detectollision(stone.mango4);
  detectollision(stone.mango5);
  detectollision(stone.mango6);
  detectollision(stone.mango7);
  detectollision(stone.mango8);
  detectollision(stone.mango9);*/
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

 
function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x:150,y:520})
		sling.attach(stone.body);
	}
}

 /*function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}*/


