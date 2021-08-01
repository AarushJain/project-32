class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.4,
        friction:1.0,
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
    this.Visibility=254;
  }
  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      count++;
      console.log("Hello world")
    }
  }
  display(){
    if(this.body.speed < 3){
      var bpos =this.body.position;
      push()
      rectMode(CENTER);
      fill("blue");
      stroke("yellow")
      rect(bpos.x, bpos.y, this.width, this.height);
      pop()
     }
     else{
      World.remove(world, this.body);
       push();
      this.Visibility = this.Visibility - 5;
      tint(254,this.Visiblity);
      pop();

     }
  }

}; 
  