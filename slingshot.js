class slingshot
{
 constructor(bodyA, pointB)
 {
  var options = { bodyA: bodyA, pointB: pointB, stiffness: 0.1, length: 50 }
  this.pointB = pointB;
  this.sling = Constraint.create(options);
  this.sling1 = loadImage("holder.png");
  World.add(world, this.sling);
 }

  fly()
  {
    this.sling.bodyA = null;
  }
  
  fix(body)
  {
    this.sling.bodyA = body;
  }
  
  
  display()
  {
   
   if(this.sling.bodyA)
   {
     var pointA = this.sling.bodyA.position;
     var pointB = this.pointB;  
     push();
     stroke("blue");
     strokeWeight(6);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
     stroke("white");
     strokeWeight(2);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
     pop();
   }
    image(this.sling1,138,238,25,25);
  }
}