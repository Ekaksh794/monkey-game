
var monkey , monkey_running,ground,invisibleGround;
var banana ,fruit,bananaImage, obstacles, obstacleImage;
var fruitGroup, obstacleGroup;
var survivalTime  = 0;
var score;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
 
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX  = -4;
  ground.x = ground.width/2;
  
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
}


function draw() {
background(400);
  
 if (keyDown("space") && monkey.y >131){
     monkey.velocityY = -12;
   
 }
   monkey.velocityY = monkey.velocityY+0.8;
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
  fruits();
     obstacles();
  
   console.log(monkey.y);
  
  
  
   monkey.collide(ground);
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
 text("Score: "+ score, 500,50);
  
  stroke("black");
   textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
   text("Survival time: "+ survivalTime, 500,50);
}

function fruits (){
  
  position = Math.round(random(1,4));
  if(World.frameCount%60===0){
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
      if(position==1)
    {
      fruit.y= 150;
      fruit.scale = 0.1;
    fruit.velocityX = -7
      fruit.addImage(bananaImage);
      
    }
    else
      {
        if(position==2){
          fruit.y = 130;
          fruit.scale = 0.1;
           fruit.velocityX = -7
          fruit.addImage(bananaImage);
        }
    
    
     
    fruit.setLifetime = 100;
    //fruitGroup.add(fruit);
    
}
}
}
function obstacles(){
    position = Math.round(random(1,4));
  if (World.frameCount%100=== 0){
    var obstacles = createSprite(200,150,20,20);
     obstacles.scale = 0.1;
  if(position==1) {
      obstacles.y= 330;
    obstacles.velocityX = -7;
      obstacles.scale = 0.1;

      obstacles.addImage(obstacleImage);
      
    }
 
      obstacles.lifetime= 150;
}
}



