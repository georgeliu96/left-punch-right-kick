import { handleKeydown, handleKeyup, hitSprites } from './player/player_sprite';
import playerSprite from './player/player_sprite';
import currentEnemies, { spawnEnemy } from './player/difficulty_enemies';
import dyingEnemies from './interaction/keyPress';
import gameover, {renderGameover} from './interaction/gameover';
import arrows from './interaction/arrows';
import sprite from './sprite';
import { arrowExplode } from './interaction/arrow_explode';

var audio = document.getElementById("audio");
audio.volume = 0.2;
audio.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
}, false);


var canvas = document.getElementById("game-canvas"), 
    ctx = canvas.getContext("2d");

var background = new Image();
background.src = "../../left-punch-right-kick/src/assets/Background.png";

var play = new Image();
play.src = "../../left-punch-right-kick/src/assets/play-button.png"

play.onload = start;


var currentScore = 0;


document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);
document.addEventListener('keydown', function(e) {
    if(e.code === "KeyM") {
        audio.muted = !audio.muted;
    }
})

var gameInterval = "";
export var started = false; 

function start() {

    ctx.clearRect(0, 0, 900, 600);
    ctx.drawImage(background, 0, 0);
    ctx.scale(3,3);
    ctx.drawImage(play, 130, 100);
    ctx.scale(1/3,1/3);

    var header = "Press Space to";
    ctx.font = '30px "Press Start 2P"';
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(header, canvas.width/2, canvas.height * 7 / 15);

    document.addEventListener("keydown", handleStart);
}

function handleStart(e) {
    if(e.code === "Space") {
        if (!started) {
            started = true;
            audio.play();
            startInterval();
            spawnEnemy();
            document.removeEventListener("keydown", handleStart);
        }
    }
}

var explosions = [];
var ended = false;

function startInterval() {
    gameInterval = setInterval(() => {

        playerSprite.frameStep();
    
        playerSprite.update();
        playerSprite.render();
        currentEnemies.forEach(enemy => {
            enemy.render();
            enemy.update();
            enemy.run(enemy.key);
            arrows(enemy.dx, enemy.scale, enemy.width, enemy.key);
        })
        dyingEnemies.forEach((enemy, idx) => {
            const newArrow = Object.assign({}, arrowExplode);
            if (enemy.frameIndex === 0 && enemy.tickCount === 3) {
                newArrow.dx = Math.random() * 280 + 10;
                explosions.push(sprite(newArrow));
            }
            enemy.update();
            enemy.render();
            if (enemy.frameIndex >= (enemy.numberOfFrames - 1)) {
                currentScore += 1;
                dyingEnemies.splice(idx, 1);
            }
        });

        explosions.forEach((expo,idx) => {
            expo.update();
            expo.render();
            if (expo.yIndex === 9) {
                explosions.splice(idx, 1);
            }
        })

        hitSprites.forEach((hit, idx) => {
            hit.update();
            hit.render();
            if (hit.frameIndex >= 7) {
                hitSprites.splice(idx,1);
            }
        })
    
        if (gameover(currentEnemies) && !ended) {
            ended = true;
            setTimeout(() => {
                clearInterval(gameInterval);
                renderGameover(currentScore);
            },300);
        }
    
        document.getElementById("current-score").innerHTML = currentScore;
    
    }, 20);
}

let f = new FontFace('Press Start 2P', 'url(https://fonts.gstatic.com/s/pressstart2p/v7/e3t4euO8T-267oIAQAu6jDQyK3nYivN04w.woff2)');
f.load().then(() => {
    start();
})


export default canvas;