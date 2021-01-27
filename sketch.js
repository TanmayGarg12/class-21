var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect2 = createSprite(200, 400, 50, 80);
  fixedRect3 = createSprite(300, 100, 50, 80);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  fixedRect2.velocityX=5;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
  
  }else{
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
bounceOff(fixedRect,fixedRect2);
 
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x <object2.width/2 + object1.width/2
    && object2.x - object1.x <object1.width/2 + object2.width/2
    && object1.y - object2.y <object2.height/2 + object1.height/2
    && object2.y - object2.y <object1.height/2 + object2.height/2) {
      return true
    }
else {
  return false
}
}
function bounceOff(object1,object2){
if(object1.x - object2.x <object2.width/2 + object1.width/2
  && object2.x - object1.x <object1.width/2 + object2.width/2){ 
    object1.velocityX=object1.velocityX*-1;
    object2.velocityX=object2.velocityX*-1;
}
if(object1.y - object2.y <object2.height/2 + object1.height/2
  && object2.y - object2.y <object1.height/2 + object2.height/2){
    object1.velocityY=object1.velocityY*-1;
    object2.velocityY=object2.velocityY*-1;
}
}
