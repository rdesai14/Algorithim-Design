var fixedRect, movingRect

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(475, 200, 50, 50);
  fixedRect.shapeColor = "blue"
  fixedRect.debug = true;
  fixedRect.velocityX = 2;
  movingRect = createSprite(725, 200, 50, 50);
  movingRect.shapeColor = "blue"
  movingRect.debug = true;
  movingRect.velocityX = -2;
}

function draw() {
  background(0,0,0);
  
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {

  fixedRect.velocityX = fixedRect.velocityX *(-1);
  movingRect.velocityX = movingRect.velocityX*(-1);

}

if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {

  fixedRect.velocityY = fixedRect.velocityY *(-1);
  movingRect.velocityY = movingRect.velocityY*(-1);

}

if(movingRect.x>1200 || movingRect.x<0) {

movingRect.x = 625;
movingRect.y = 200;

}

if(fixedRect.x>1200 || fixedRect.x<0) {

  fixedRect.x = 575;
  fixedRect.y = 200;
  
  }
  drawSprites();
}