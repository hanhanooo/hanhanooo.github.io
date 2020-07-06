var stage = document.querySelector(".stage")
var startButton = stage.querySelector(".start button")
var gameScene = stage.querySelector(".gameScene")
var payButton = stage.querySelector(".gameScene .pay")
var restartButton = gameScene.querySelector(".gameScene .restart")
var scoreTxt = gameScene.querySelector(".gameScene .score")

var ourPlane = {
    node : gameScene.querySelector(".gameScene .ourPlane"),
    w:66,
    h:80,
    x: 360/2,
    y: 640 - 80,
    life:3,
}


var bullet = {
    imgSrc:"./images/our-bullet.png",
    w : 6,
    h : 14,
    x : ourPlane.x,
    y : ourPlane.y,
    speed : -8,
    life:1,
}

var enemyS = {
    imgSrc: "./images/enemy-plane-s.png",
    imgSrcHit:"./images/enemy-plane-s.png",
    imgSrcBoom:"./images/enemy-plane-s.png",
    w : 34,
    h : 24,
    x : 0,
    y : 0,
    speed : 5,
    addScore: 1,
    life:1
}
var enemyM = {
    imgSrc: "./images/enemy-plane-m.png",
    imgSrcHit:"./images/enemy-plane-m-hit.png",
    imgSrcBoom:"./images/enemy-plane-s-boom.gif",
    w : 46,
    h : 60,
    x : 0,
    y : 0,
    speed : 3,
    addScore: 2,
    life:3
}
var enemyL = {
    imgSrc: "./images/enemy-plane-l.png",
    imgSrcHit:"./images/enemy-plane-l-hit.png",
    imgSrcBoom:"./images/enemy-plane-l-boom.gif",
    w : 110,
    h : 164,
    x : 0,
    y : 0,
    speed : 2,
    addScore: 3,
    life:5
}

function Element(params){
    this.imgSrc = params.imgSrc;
    this.imgSrcHit = params.imgSrcHit;
    this.imgSrcBoom = params.imgSrcBoom;
    this.w = params.w;
    this.h = params.h;
    this.x = params.x;
    this.y = params.y;
    this.speed = params.speed;
    this.addScore = params.addScore;
    this.life = params.life;
}

Element.prototype.create = function(){
    this.node = document.createElement('img');
    this.node.src =this.imgSrc;
    gameScene.appendChild(this.node);
    this.node.style.left = this.x -this.w/2 +'px';
    this.node.style.top = this.y -this.h/2 +'px';
}
Element.prototype.move = function(){
    this.y += this.speed;
    this.node.style.top = this.y - this.h/2 +'px';
    // 超出上面 和 超出下面 删除子弹
    if(this.y < - this.h/2){
        this.death = true;    
    }
}




var gamePauseState = false;
var gameDeathState = false;

var gameBGPosY = 0;
var frameID ;
var frames = 0;
var bullets = [];
var enemies = [];
var score = 0;

// 初始化
ourPlane.node.style.left = ourPlane.x - ourPlane.w/2 + 'px';
ourPlane.node.style.top = ourPlane.y - ourPlane.h/2  + 'px';

// 开始游戏按钮 切换场景
startButton.onclick = function () {
    stage.classList.add("play");
    frameID = updateFrame();
}
// 花钱买命
payButton.onclick = function(){
    stage.classList.remove("death");
    gameDeathState = false;
    ourPlane.life = 3;
}
// 重新开始
restartButton.onclick = function(){
    window.location.reload();
}

//点击游戏中页面 切换暂停状态
gameScene.onclick = function () {
    if (!gamePauseState) {
        // 暂停游戏
        gamePaused();
    } else {
        // 继续游戏
        gamePlay();
    }
}


// 触屏拖动 飞机跟随移动
gameScene.ontouchmove = function(event){
    ourPlane.x  = event.changedTouches[0].clientX;
    ourPlane.y = event.changedTouches[0].clientY;
    ourPlane.node.style.left = ourPlane.x - 66 / 2 + 'px';
    ourPlane.node.style.top = ourPlane.y - 80 / 2 + 'px';
}

function updateFrame() {
    return setInterval(function () {
        // 游戏背景滚动
        gameBGPosY++;
        gameScene.style.backgroundPositionY = gameBGPosY + 'px';

        // 检查死亡状态
        if (gameDeathState) {
            // 暂停游戏
            gamePaused();
            stage.classList.add("death");
        }

        // 生成子弹
        frames ++ ;
        if(frames % 10 == 0){
            var b = new Element(Object.assign(bullet,{x:ourPlane.x,y:ourPlane.y}));
            b.create();
            bullets.push(b);
            biu()
        }

        //生成飞机
        if(frames%30 == 0){
            var es = new Element(Object.assign(enemyS,{x:randomPosX(),y:-enemyS.h/2}) );
            es.create();
            enemies.push(es)
        }
        if(frames%50 == 0){
            var em = new Element(Object.assign(enemyM,{x:randomPosX(),y:-enemyM.h/2}) );
            em.create();
            enemies.push(em)
        }
        if(frames%100 == 0){
            var el = new Element(Object.assign(enemyL,{x:randomPosX(),y:-enemyL.h/2}) );
            el.create();
            enemies.push(el)
        }
        
        
        // 移动所有子弹
        bullets.forEach(function(bullet,index,bullets){
            bullet.move();
            // 超出上面 和 超出下面 删除子弹
            if(bullet.death){
                gameScene.removeChild(bullet.node);
                bullets.splice(index,1)
            }
        })
        // 移动所有敌方飞机
        enemies.forEach(function(enemy,index,enemies){
            enemy.move();
            // 超出上面 和 超出下面 删除子弹
            if(enemy.death){
                gameScene.removeChild(enemy.node);
                enemies.splice(index,1)
            }

            // 碰撞检测
            // 碰撞子弹
            bullets.forEach(function(bullet,ind,bullets){
                if(checkCollision(enemy,bullet)){
                    bullet.death =true;
                    enemy.life--;
                    if(enemy.life<=0){
                        enemy.node.src = enemy.imgSrcBoom;
                        enemy.death = true;
                        score += enemy.addScore;
                        scoreTxt.innerText = score;
                    }else if(enemy.life == 1){
                        enemy.node.src = enemy.imgSrcHit;
                    }
                    ding()
                }
            })

            // 与玩家发生碰撞
            if(checkCollision(enemy,ourPlane)){
                enemy.life--;
                if(enemy.life <= 0){
                    enemy.death = true;
                }
                gameDeathState = true;
            }
        })


        
    }, 30);
} 

function checkCollision(a,b){
    return Math.abs(a.x-b.x)<= (a.w+b.w)/2 && Math.abs(a.y-b.y)<= (a.h+b.h)/2
}

// 游戏播放
function gamePlay(){
    gamePauseState = false;
    stage.classList.remove("paused");
    // 创建定时器
    frameID = updateFrame();
}

// 游戏暂停
function gamePaused(){
    gamePauseState = true;
    stage.classList.add("paused");
    // 清除定时器
    clearInterval(frameID);
}

// 随机y轴位置
function randomPosX(){
    return Math.round(Math.random()*360);
}

function biu(){
    var x = document.createElement("audio");
    x.src =  './images/发射子弹.mp3'
    x.play()
}

function ding() {
    var x = document.createElement('audio')
    x.src = './images/子弹铁皮.mp3'
    x.play()
  }
