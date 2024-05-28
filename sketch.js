
var trex ,trex_running;
var ground, obstacle;
var groundImage, invisibleGround;
var cloudImage;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png" );
groundImage = loadImage("ground2.png");
cloudImage = loadImage("cloud.png");

obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
obstacle6 = loadImage("obstacle6.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50,180,20,50);
trex.scale = 0.5;
  trex.addAnimation ("runnig", trex_running);

  // crear sprites del suelo 
ground = createSprite(200,180,400,20);
ground.addImage("ground" ,groundImage );

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;
var rand = Math.round(random(1,100));
console.log(rand);

console.log("Hola"+"mundo");
}

function draw(){
  background("white")
  text("Puntuacion " + score, 500 ,50);
  
if(gameState === PLAY){
  // mover el suelo 
  ground.velocityX = -6;
  //sumatorian de puntos 
score = score + Math.round(frameCount/60);
 // reiniciar el suelo del trex
 if(ground.x<0){
    ground.x = ground.width/2;
  }
  //tecla de salto
 if(keyDown("space") &&trex.y >=100 ){
    trex.velocityY = -10 ;

  }
  // agregar gravedad
  trex.velocityY = trex.velocityY + 0.5 ;



}

else if (gameState === END){
  ground.velocityX = 0;






}

  console.log(frameCount);


 

 

   // CHOQUE CON EL SUELO
   trex.collide(invisibleGround);
   //lamada de la funcion de nubes 
   spawnClouds();
   spawnObstacles();


  drawSprites();

}
function spawnClouds(){
  if(frameCount % 60 === 0){
  cloud = createSprite(600,100,40,10);
  cloud.addImage(cloudImage)
  cloud.y = Math.round (random(10,60));
  cloud.scale = 0.4;
  cloud.velocityX = -3;

  //Tiempo de vida de un sprite
  cloud.lifetime = 230;

  //Ajustar la profundidad de los sprites
  cloud.depth = trex.depth;
  trex.depth = trex.depth + 1;

  
  }
}
function spawnObstacles(){
  if(frameCount % 60 === 0){
   obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;


  var rand = Math.round(random(1,6));
switch(rand){
  case 1: obstacle.addImage(obstacle1);
  break;
  case 2: obstacle.addImage(obstacle2);
  break;
  case 3: obstacle.addImage(obstacle3);
  break;
  case 4: obstacle.addImage(obstacle4);
  break;
  case 5: obstacle.addImage(obstacle5);
  break;
  case 6: obstacle.addImage(obstacle6);
  break;
  default: break;
}
// asignar scala y lifetime

obstacle.scale = 0.5;
obstacle.lifetime = 230;
}
}
