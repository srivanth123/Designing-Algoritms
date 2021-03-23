var fixedRect
var movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 200, 100, 50);
  fixedRect.shapeColor="white"

  movingRect=createSprite(400,300,100,50)
  movingRect.shapeColor="white"

}

function draw() {
  background("black"); 
  
  movingRect.y=World.mouseY
  movingRect.x=World.mouseX

  if(movingRect.isTouching(fixedRect)){
fixedRect.shapeColor="red"
movingRect.shapeColor="red"  

}
else{

fixedRect.shapeColor="white"
movingRect.shapeColor="white"

}




  drawSprites();
}