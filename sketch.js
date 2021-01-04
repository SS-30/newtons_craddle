
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ball1=new Ball(560,350,50,30)
	ball2=new Ball(480,350,50,30)
	ball3=new Ball(400,350,50,30)
	ball4=new Ball(320,350,50,30)
	ball5=new Ball(250,350,50,30)
  roof=new Roof(400,100,400,20)
  string1=new String(ball1.body,roof.body,150,0);
  string2=new String(ball2.body,roof.body,80,0)
  string3=new String(ball3.body,roof.body,0,0)
  string4=new String(ball4.body,roof.body,-80,0)
  string5=new String(ball5.body,roof.body,-150,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  fill("blue");
  roof.display();
  fill("white");
  string1.display();
  string2.display()
  string3.display()
  string4.display()
  string5.display()
  drawSprites();

 
}

function keyPressed() {
  if (keyCode === UP_ARROW){
   Body.applyForce(ball1.body,ball1.body.position,{x:-540,y:-545});
  }
 }





