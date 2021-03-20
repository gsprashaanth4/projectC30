class stand
{
  constructor(x,y)
  {
    var options = {isStatic:true};
    this.body = Bodies.rectangle(x,y,240,15,options);
    this.image = loadImage("ground.png");
    this.width = 240;
    this.height = 15;
    World.add(world,this.body);
  }
  
  display()
  {
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,240,15);
    pop();
  }
}