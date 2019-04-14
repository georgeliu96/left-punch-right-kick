import { handleKeydown, handleKeyup } from './player/player_sprite';
import playerSprite from './player/player_sprite';
import currentEnemies, { spawnEnemy } from './player/difficulty_enemies';
import dyingEnemies from './interaction/keyPress';
import gameover from './interaction/gameover';
import arrows from './interaction/arrows';

var canvas = document.getElementById("game-canvas"), 
    ctx = canvas.getContext("2d");

var background = new Image();
background.src = "../src/assets/Background.png";

var play = new Image();
play.src = "../src/assets/play-button.png"

play.onload = start;


var currentScore = 0;


// document.addEventListener("keydown", handleUI);
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);

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

function startInterval() {
    gameInterval = setInterval(() => {

        playerSprite.frameStep();
    
        playerSprite.update();
        playerSprite.render();
    
        currentEnemies.forEach(enemy => {
            enemy.update();
            enemy.run(-enemy.reverse);
            enemy.render();
            arrows(enemy.dx)
        })
        dyingEnemies.forEach((enemy, idx) => {
            enemy.update();
            enemy.render();
            if (enemy.frameIndex >= 9) {
                currentScore += 1;
                dyingEnemies.splice(idx, 1);
            }
        });
    
        if (gameover(currentEnemies)) {
            if (firstAlert) { 
                firstAlert = false; 
                setTimeout(() => {
                    firstAlert = false; 
                    clearInterval(gameInterval);
                    alert("Game over!");
                    setTimeout(() => window.location.reload(), 3000);
                },500);
            }
        }
    
        document.getElementById("current-score").innerHTML = currentScore;
    
    }, 20);
}

start();


// export var paused = false; 

// function handleUI (e) {
//     const newSpawn = spawnEnemy;
//     if (e.code === "KeyP" && (!paused) ) {
//         paused = true;
//         clearInterval(gameInterval);
//         playerSprite.render();
//         currentEnemies.forEach(enemy => {
//             enemy.render();
//         })
//     }else if (e.code === "KeyP") {
//         paused = false;
//         startInterval();
//         debugger 
//         newSpawn();
//     }
// }



export default canvas;