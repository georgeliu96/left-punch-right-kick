import { handleKeydown } from './player/player_sprite';
import plyrSprt from './player/player_sprite';

var canvas = document.getElementById("game-canvas");

var background = new Image();
background.src = "../src/assets/Background.png";

document.addEventListener("keydown", handleKeydown);

background.onload = () => {
    gameLoop();
}



function gameLoop() {

    window.requestAnimationFrame(gameLoop)

    plyrSprt.update();
    plyrSprt.render();
}

export default canvas;