import { handleKeydown, handleKeyup } from './player/player_sprite';
import playerSprite from './player/player_sprite';
import { leftSprite, rightSprite }  from './player/enemy_sprite';

var canvas = document.getElementById("game-canvas");

var background = new Image();
background.src = "../src/assets/Background.png";

document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);

background.onload = () => {
    gameLoop();
}



function gameLoop() {

    window.requestAnimationFrame(gameLoop)
    playerSprite.frameStep();

    playerSprite.update();
    playerSprite.render();

    leftSprite.update();
    leftSprite.run(1)
    leftSprite.render();
    rightSprite.update();
    rightSprite.run(-1);
    rightSprite.render();

    // that.context.clearRect(0, 0, 900, 616);

}

export default canvas;