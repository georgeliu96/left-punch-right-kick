import handleKeydown from './player/player_attack';
import plyrSprt from './player/player_idle';

var canvas = document.getElementById("game-canvas");

var background = new Image();
background.src = "../left-punch-right-kick%20assets/Background.png";

document.addEventListener("keydown", handleKeydown);
// document.addEventListener("keyup", handleKeyup);

background.onload = () => {
    gameLoop();
}



function gameLoop() {

    window.requestAnimationFrame(gameLoop)

    plyrSprt.update();
    plyrSprt.render();
}

export default canvas;