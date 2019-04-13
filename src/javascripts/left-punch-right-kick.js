import { handleKeydown, handleKeyup } from './player/player_sprite';
import playerSprite from './player/player_sprite';
import currentEnemies from './player/difficulty_enemies';
import dyingEnemies from './interaction/keyPress';
import gameover from './interaction/gameover';
import arrows from './interaction/arrows';

var canvas = document.getElementById("game-canvas");

var background = new Image();
background.src = "../src/assets/Background.png";

var currentScore = 0;

document.addEventListener("keydown", handleUI);
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);

var firstAlert = true;

var gameInterval = setInterval(() => {

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

}, 20);

var paused = false; 

function handleUI (e) {
    if (e.code === "KeyP" && (!paused) ) {
        paused = true;
        clearInterval(gameInterval);
        playerSprite.render();
        currentEnemies.forEach(enemy => {
            enemy.render();
        })
    }else if (e.code === "KeyP") {
        paused = false;
        gameInterval = setInterval(() => {

            playerSprite.frameStep();
        
            playerSprite.update();
            playerSprite.render();
        
            currentEnemies.forEach(enemy => {
                enemy.update();
                enemy.run(-enemy.reverse);
                enemy.render();
                arrows(enemy.dx);
            })
            dyingEnemies.forEach((enemy, idx) => {
                enemy.update();
                enemy.render();
                if (enemy.frameIndex >= 9) {
                    while(dyingEnemies)
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
        }, 20);
    }
}



export default canvas;