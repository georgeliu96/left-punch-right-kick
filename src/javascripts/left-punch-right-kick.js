import { handleKeydown, handleKeyup, hitSprites } from './player/player_sprite';
import playerSprite from './player/player_sprite';
import currentEnemies, { spawnEnemy } from './player/difficulty_enemies';
import dyingEnemies from './interaction/keyPress';
import gameover from './interaction/gameover';
import arrows from './interaction/arrows';
import sprite from './sprite';
import { arrowExplode } from './interaction/arrow_explode';

var audio = document.getElementById("audio");
audio.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
}, false);
setTimeout(() => audio.play(), 1000);

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

var firstAlert = true;
var gameInterval = "";
export var started = false; 

function start() {
    ctx.clearRect(0, 0, 900, 616);
    ctx.drawImage(background, 0, 0);
    ctx.scale(3,3);
    ctx.drawImage(play, 130, 100);
    ctx.scale(1/3,1/3);
    canvas.addEventListener("click", handleStart);

}

function handleStart(e) {
    if(e.offsetX > 390 && e.offsetX < 510 && e.offsetY > 300 && e.offsetY < 360) {
        if (!started) {

            started = true;
            startInterval();
            spawnEnemy();
            canvas.removeEventListener("click", handleStart);
        }
    }
}

var explosions = [];

function startInterval() {
    gameInterval = setInterval(() => {

        playerSprite.frameStep();
    
        playerSprite.update();
        playerSprite.render();
    
        currentEnemies.forEach(enemy => {
            enemy.update();
            enemy.run(enemy.key);
            enemy.render();
            arrows(enemy.dx, enemy.key);
        })
        dyingEnemies.forEach((enemy, idx) => {
            const newArrow = Object.assign({}, arrowExplode);
            newArrow.dx = (enemy.dx * 1.2) - 20;
            if (enemy.frameIndex === 0) {
                explosions.push(sprite(newArrow));
            }
            enemy.update();
            enemy.render();
            if (enemy.frameIndex >= 9) {
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
    
        if (gameover(currentEnemies)) {
            if (firstAlert) { 
                firstAlert = false; 
                setTimeout(() => {
                    firstAlert = false; 
                    clearInterval(gameInterval);
                    alert("Game over!");
                    setTimeout(() => window.location.reload(), 3000);
                },300);
            }
        }
    
        document.getElementById("current-score").innerHTML = currentScore;
    
    }, 20);
}

start();


export default canvas;