import sprite from '../sprite'

var canvas = document.getElementById("game-canvas");

var player = new Image(); 
player.src = "../src/assets/player-sprite-3/adventurer-v1.5-Sheet.png"

var playerPunch = new Image();
playerPunch.src="../src/assets/player-sprite-4/reverse-punch.png"

var playerKick = new Image();
playerKick.src="../src/assets/player-sprite-4/forward-kick.png"

var plyrSprt = sprite({
    context: canvas,
    height: 37,
    width: 50,
    image: player,
    numberOfFrames: 4,
    ticksPerFrame: 5
})

var left_press = false;
var right_press = false; 

function reset() {
    setTimeout(() => plyrSprt.action(player,0,0), 400);
}

function handleLeft() {
    punch();
}

function punch() {
    plyrSprt.action(playerPunch, 0, 0);
    reset();
}

function kick() {
    plyrSprt.action(playerKick, 0, 0);
    reset();
}

export function handleKeydown(e) {

    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        handleLeft();
    }else if (e.code == "ArrowRight" || e.code == "KeyD") {
        kick();
    }
}


export default plyrSprt;