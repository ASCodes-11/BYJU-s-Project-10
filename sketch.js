
var sea;
var seaImg;
var shipImg1;
var ship;

function preload(){

 seaImg = loadImage ("sea.png");
 shipImg1 = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png"); 

}

function setup(){
  createCanvas(400,400);
  
  background("blue");
  
  sea = createSprite (200, 200, 10, 10);
  sea.addImage ("Sea", seaImg);
  sea.velocityX = -5;
  
  ship = createSprite(200, 200, 10, 10);
  ship.addAnimation ("Ship", shipImg1);
  ship.scale = 0.5;
 
}

function draw() {
  
  if (sea.x < 0) {
    sea.x = sea.width/2;

 }

  drawSprites();
}