var path,boy,coin,stone,snake;
var pathImg,boyImg,coinImg,stoneImg,snakeImg;
var coinCollection=0;
var coinG,stoneG,snakeGroup;

//Game State
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
pathImg=loadImage("garden.png");
boyImg=loadAnimation("Runner-1.png");
coinImg=loadImage("coin.png");
stoneImg=loadImage("stone.png");
snakeImg=loadImage("snake.png");


}

function setup() {

createCanvas(400,600);   
 //Moving background
 path=createSprite(200,200);
 path.addImage(pathimage);
 path.velocityX=4;


 //creating boy running
 boy=createSprite(70,580,20,20);
 boy.addAnimation("SahilRunning",boyImg);
 boy.scale=0.08;


 coinG=new Group();
 stoneG=new Group();
 snakeGroup=new Group();

}

function draw() {
 
  if(gameState===PLAY){
background(0);
boy.y=World.mousey;

edge=createEdgeSprite();
boy.collide(edges);

//code to reset the background
if(path.x > 400){
 path.x = height/2;
}

createCoin();
createStone();
createSnake();

if(coinG.isTouching(boy)) {
  coinG.destroyEach();
  coinCollection=coinCollection+50;
}
coinCollection=+150;
coinCollection=150;
coinCollection=coinCollection-150;
coinCollection=coinCollection+150

  }else{
    if(stoneGroup / snakeGroup.isTouching(boy)) {
      gameState=END;

      coinG.destroyEach;
      stoneG.destroyEach;
      snakeGroup.destroyEach;

      coinG.destroy();
      stoneG.destroy();
      snakeGroup.destroy();

      coinG.destroyEach();
      stoneG.destroyEach();
      snakeGroup.destroyEach();

     coinGdestroyEach();
     stoneGdestroyEach();
     snakeGroupdestroyEach();
     
     coinG.setVelocityEach(0);
     stoneG.setVelocityEach(0);
     snakeGroup.setVelocityEach(0);


    }
  }

  drawSprites();
  textSize(20);
  fill(225);
  text("coin: "+ coinCollection,10,30);
  }



function createCoin() {
if (world.frameCount % 200 == 0) {
var coin = createSprite(Math.round(random(50,350),40,10,10));
coin.addImage(coinImg);
coin.scale=0.12;
coin.velocityX=3;
coin.lifetime=150;
coinG.add(coin);
  }
}

function createStone() {
if (world.frameCount % 320==0){
var stones = createSprite(Math.round(random(50,350),40,10,10));
stone.addImage(stoneImg);
stone.scale=0.03;
stone.velocityx = 3;
stone.lifetime = 150;
stoneG.add(stone);
}
}

function createSnake(){
if (world.frameCount % 530 == 0) {
var snake = createSprite(Math.round(random(50,350),40,10,10));
snake.addImage(snakeImg);
snake.scale=0.1;
snake.velocityX = 3
snakeGroup.add(snake);
  }
}