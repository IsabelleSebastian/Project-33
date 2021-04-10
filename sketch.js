const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg = "snow2.jpg"
var backgroundImg
var snow1 = []; //null array
var maxSnow = 5;

function preload(){
  backgroundImg = loadImage(bg)
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  if(frameCount % 80 === 0){

    for(i=0; i<maxSnow; i++){
      snow1.push(new snow(random(0,800),0))
    }
  }
  }

function draw() {
  background(backgroundImg);
  Engine.update(engine);

for(i=0; i<maxSnow; i++){
  snow1[i].display();
}

  drawSprites();
}