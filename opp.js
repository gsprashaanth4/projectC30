class opp extends baseClass 
{
  constructor(x, y){
    super(x,y,35,35);
    this.image = loadImage("opp11.png");
    this.Visiblity = 255;
  }  

  display()
  {
    if(this.body.speed < 8)
    {
      super.display();
    }else
    {
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity-7;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,35,35);
      pop();
    }
  }
}
