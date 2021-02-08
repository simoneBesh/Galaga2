var player, playerImg;
var enemy1, enemy2, enemy1Img, enemy2Img;
var bullet, bulletImg;
var enemyGroup,  bulletGroup;


function preload(){
    playerImg = loadImage("galagaShip.png");
    enemy1Img = loadImage("enemy1.png");
    enemy2Img = loadImage("enemy2.png");
    bulletImg = loadImage("bullet.png");

}

function setup(){
    createCanvas(1440, 830);

    player = createSprite(720, 750, 30, 30);
    player.addImage("player", playerImg);
    player.scale = 0.1;

    enemyGroup = new Group();
    bulletGroup = new Group();

}

function draw(){
    background("black");

    if(keyDown(LEFT_ARROW)){
        player.velocityX=-10;
        //bullet.velocityX = -10;
    } 
    if(keyDown(RIGHT_ARROW)){
        player.velocityX=10;
        //bullet.velocityX = 10;
    }

    if(player.x<0){
        player.x = 1435;
        bullet.x = 1435;
    }
    if(player.x>1440){
        player.x = 5;
        bullet.x = 5;
    }

    if(keyDown("space")){
    fireBullet();
    }

    if(bulletGroup.isTouching(enemyGroup)){
        enemyGroup.destroyEach();
    }


spawnEnemy();

    drawSprites();
}

function fireBullet(){
    bullet = createSprite(player.x, player.y - 30, 30, 30);
    bullet.addImage("bullet", bulletImg);
    bullet.scale = 0.07;
    bullet.velocityY = -10;
    bulletGroup.add(bullet);
}

function spawnEnemy(){
    //console.log(frameCount);
    if(frameCount % 10 === 0){

    var rand = Math.round (random(1,2));
    var randX = Math.round(random(50, 1400));
    var randVx = Math.round(random(-15, 15));
    var randVy = Math.round(random(6,15));

    console.log(rand);
    if(rand ===1){
        enemy1 = createSprite(randX, 200, 30, 30);
        enemy1.addImage("enemy1", enemy1Img);
        enemy1.scale = 0.1;
        enemy1.velocityY=randVy;
        enemy1.velocityX =randVx;
        enemy1.lifetime = 100;
        enemyGroup.add(enemy1);
    } else if(rand ===2){
        enemy2 = createSprite(randX, 200, 30, 30);
        enemy2.addImage("enemy2", enemy2Img);
        enemy2.scale = 0.07;
        enemy2.velocityY=randVy;
        enemy2.velocityX =randVx;
        enemy2.lifetime = 100;
        enemyGroup.add(enemy2);
    }
        
    }
    
}