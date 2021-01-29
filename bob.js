class Bob{
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':1.0,
          'friction':0,
          'density':0.8,
      }
      this.body = Bodies.circle(x, y,20,options);
     this.radius=40
      

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(0,0,this.radius,this.radius)
      pop();
    }
  };
  