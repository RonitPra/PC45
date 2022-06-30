var path,boy,cash,diamonds,jwellery,rock;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,rockImg;
var cashCollection = 0;
var cashG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("back.jpg");
  boyImg = loadAnimation("player.png");
  cashImg = loadImage("money.png");
  rockImg = loadImage("rock.png");
  endImg = loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 5


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale = 1.5;
  
  
cashG = new Group();
rockGroup = new Group();

}

function draw() {

  if(gameState === PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges = createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createRock();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      scoreCollection = cashCollection + 50;
    }      
    else{
      if(rockGroup.isTouching(boy)) {
        gameState = END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x = width/2;
        boy.y = height/2;
        boy.scale = 0.6;
        
        cashG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(30);
  fill(255);
  text("Score: "+ cashG,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}


function createRock(){
  if (World.frameCount % 530 == 0) {
  var rock = createSprite(Math.round(random(50, width-50),40, 10, 10));
  rock.addImage(rockImg);
  rock.scale=0.1;
  rock.velocityY = 4;
  rock.lifetime = 200;
  rockGroup.add(rock);
  }
}