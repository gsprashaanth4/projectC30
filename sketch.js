const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var engine;
var world;

var pl1;
var g1;
var sl1;

var op1;
var op2;
var op3;
var op4;
var op5;
var op6;
var op7;
var op8;
var op9;
var op10;

var op11;
var op12;
var op13;
var op14;
var op15;
var op16;
var op17;
var op18;
var op19;
var op20;

var h1;

var mC

function preload()
{
  bg = loadImage("bg.png");
}


function setup()
{
  createCanvas(1200,600);
 
  engine = Engine.create();
  world = engine.world; 
  
  
  
  pl1 = new player(250,50);
  g1 = new ground(600,520);
  sl1 = new slingshot(pl1.body,{x:150,y:250});
  st1 = new stand(1000,200);
  st2 = new stand(600,400);
  
  op1 = new opp(530,350);
  op2 = new opp(575,350);
  op3 = new opp(625,350);
  op4 = new opp(670,350);
  op5 = new opp(550,300);
  op6 = new opp(600,300); 
  op7 = new opp(650,300);
  op8 = new opp(575,250);
  op9 = new opp(625,250);
  op10 = new opp(600,200);
  
  op11 = new opp(1025,150);
  op12 = new opp(975,150);
  op13 = new opp(925,150);
  op14 = new opp(1070,150);
  op15 = new opp(950,100);
  op16 = new opp(1000,100); 
  op17 = new opp(1050,100);
  op18 = new opp(975,50);
  op19 = new opp(1025,50);
  op20 = new opp(1000,0);  

}

function draw()
{
  Engine.update(engine);
  
  background(bg);
  pl1.display();
  sl1.display();
  st1.display();
  st2.display();
  op1.display();
  op2.display();
  op3.display();
  op4.display();
  op5.display();
  op6.display();
  op7.display();
  op8.display();
  op9.display();
  op10.display();
  
  op11.display();
  op12.display();
  op13.display();
  op14.display();
  op15.display();
  op16.display();
  op17.display();
  op18.display();
  op19.display();
  op20.display();  
 
}

function mouseDragged()
{
  Matter.Body.setPosition(pl1.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
    sl1.fly();
}

function keyPressed()
{
   if(keyCode === 32)
    {
     sl1.fix(pl1.body);
    }
}
