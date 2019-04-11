import sprite from '../sprite'

var canvas = document.getElementById("game-canvas");

var player = new Image(); 
player.src = "../src/assets/player-sprite-3/adventurer-v1.5-Sheet.png"

var playerPunch = new Image();
playerPunch.src="../src/assets/player-sprite-4/reverse-punch.png"

var playerKick = new Image();
playerKick.src="../src/assets/player-sprite-4/forward-kick.png"

var playerSprite = sprite({
    context: canvas,
    height: 37,
    width: 50,
    image: player,
    numberOfFrames: 4,
    ticksPerFrame: 5,
    dx: (440 - 25) / 1.5,
    dy: (502 / 1.5),
    scale: 1.5
});

var keyLeft = false;
var keyRight = false;

function reset() {
    setTimeout(() => playerSprite.action(player,0,0), 500);
}

function handleLeft(e) {
    if(e.type === "keyup") {
        setTimeout(() => keyLeft = false, 500);
    }else {
        if (!keyLeft) {
            punch();
            keyLeft = true;
        }
    }
}

function handleRight(e) {
    if(e.type === "keyup") {
        setTimeout(() => keyRight = false, 300);
    }else {
        if (!keyRight) {
            kick();
            keyRight = true;
        }
    }
}

function punch() {
    playerSprite.action(playerPunch, 0, 0);
    reset();
}

function kick() {
    playerSprite.action(playerKick, 0, 0);
    reset();
}

export function handleKeydown(e) {

    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        handleLeft(e);
    }else if (e.code == "ArrowRight" || e.code == "KeyD") {
        handleRight(e);
    }
}

export function handleKeyup(e) {
    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        handleLeft(e);
    }else if (e.code == "ArrowRight" || e.code == "KeyD") {
        handleRight(e);
    }
}

export default playerSprite;