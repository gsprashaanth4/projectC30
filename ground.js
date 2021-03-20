class ground
{
  constructor(x,y)
  {
    var options = {isStatic:true};
    this.body = Bodies.rectangle(x,y,1000,50,options);
    //this.image = loadImage("ground.png");
    this.width = 1000;
    this.height = 50;
    World.add(world,this.body);
  }
  
  display()
  {
    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    rect(0,0,1300,50);
    pop();
  }
}