import { handleKeydown, handleKeyup } from './player/player_sprite';
import playerSprite from './player/player_sprite';
// import { leftSprite, rightSprite }  from './player/enemy_sprite';
import currentEnemies from './player/difficulty_enemies';

var canvas = document.getElementById("game-canvas");

var background = new Image();
background.src = "../src/assets/Background.png";

document.addEventListener("keydown", handleUI);
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);

var gameInterval = setInterval(() => {

    playerSprite.frameStep();

    playerSprite.update();
    playerSprite.render();

    currentEnemies.forEach(enemy => {
        enemy.update();
        enemy.run(-enemy.reverse);
        enemy.render();
    })
}, 15);

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
        
            currentEnemies.forEach((enemy, index) => {
                // debugger 
                console.log(index)
                console.log(enemy.dx)
                enemy.update();
                enemy.run(-enemy.reverse);
                enemy.render();
            })
        }, 15);
    }
}

    // leftSprite.update();
    // leftSprite.run(1)
    // leftSprite.render();
    // rightSprite.update();
    // rightSprite.run(-1);
    // rightSprite.render();

    // that.context.clearRect(0, 0, 900, 616);


export default canvas;