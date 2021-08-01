const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

var slingShot;

var count=0;
var polygon_img;

var ground2;


function preload()
{
  polygon_img=loadImage("sprites/polygon.png");
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
    world = engine.world;
    
    ground= new Ground(1000,425,300, 20)
    box1= new Box(1000,400,100,75)
    box2= new Box(1050,400,100,75)
    box3= new Box(950,400,100,75)
    box4= new Box(975,350,100,75)
    box5= new Box(1025,350,100,75)
    box6= new Box(1000,300,100,75)

    ground2= new Ground(800,height,1600,10)

    polygon=Bodies.circle(300,350,20);
    World.add(world,polygon)

    slingShot= new SlingShot(this.polygon,{x:300,y:350});


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  imageMode(CENTER)
 image(polygon_img, polygon.position.x,polygon.position.y,100,100)

 ground.display();

 textSize(50)
 text("Score: "+count,800,100)
console.log(count)

 box1.display();
 box1.score();
 box2.display();
 box2.score();
 box3.display();
 box3.score();
 box4.display();
 box4.score();
 box5.display();
 box5.score();
 box6.display();
 box6.score();


 ground2.display(); 
  
  drawSprites();
 
}

function mouseDragged()
{
Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY}); 
}
function mouseReleased()
{
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon);
  }
}