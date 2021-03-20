class player
{
  constructor(x,y)
  {
    var options = {isStatic:false, friction:1, density:10};
    this.body = Bodies.rectangle(x,y,30,30,options);
    this.width = 30;
    this.height = 30;
    this.image = loadImage("player.png");
    World.add(world,this.body);
  }
  
  display()
  {
    var angl = this.body.angle
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,30,30);
    pop();
  }
}