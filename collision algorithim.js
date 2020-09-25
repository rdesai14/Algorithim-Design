var fixedRect, movingRect

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue"
  fixedRect.debug = true;
  movingRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor = "blue"
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {

movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";

  }
else{

  fixedRect.shapeColor = "blue"
  movingRect.shapeColor = "blue"

}

  drawSprites();
}