var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="blue"
  fixedRect = createSprite(200,300,50,50);
  fixedRect.shapeColor="blue"
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    ){
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green";
    }else{
      movingRect.shapeColor="blue";
      fixedRect.shapeColor = "blue";
    }
  drawSprites();
}