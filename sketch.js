var bullet;
var wall;
var thickness,thickness,weight;

function setup() {
  createCanvas(1600,400);
 bullet =  createSprite(50, 200, 50, 50);
speed = random(223,231);
weight = random(30,52);
thickness = random(22,28);
wall = createSprite(1200,200,thickness,200);
wall.shapeColor = "green";
bullet.velocityX = speed;

}

function draw() {
  background("black"); 
  
  if(colliod(bullet,wall)){

  bullet.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;

 if(deformation>10){

  wall.shapeColor = "red";

 }
else if(deformation<10){

 wall.shapeColor = "yellow";


}



  }

  drawSprites();
}
function colliod(x1,y1){

 bulletF = x1.x+x1.width;
wallL = y1.x;
if(bulletF>=wallL){
return true;


}
else {

return false

}


}