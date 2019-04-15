import sprite from '../sprite';
import { handlePress } from '../interaction/keyPress';
import { leftHitSprite, rightHitSprite } from '../interaction/hit_sprite';

var canvas = document.getElementById("game-canvas");

var player = new Image(); 
player.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/player-sprite-3/adventurer-v1.5-Sheet.png"

var playerPunch = new Image();
playerPunch.src="https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/player-sprite-4/reverse-punch.png"

var playerKick = new Image();
playerKick.src="https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/player-sprite-4/forward-kick.png"

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


function reset() {
    playerSprite.action(player,0,0);
}
var keyLeft = false;
export var hitSprites = [];

function handleLeft(e) {
    if(e.type === "keyup") {
        keyLeft = false;
    }else {
        if (!keyLeft && playerSprite.image === player) {
            handlePress(e);
            keyLeft = true;
            punch();
        }
    }
}
var keyRight = false;

function handleRight(e) {
    if(e.type === "keyup") {
        keyRight = false;
    }else {
        if (!keyRight && playerSprite.image === player) {
            handlePress(e);
            keyRight = true;
            kick();
        }
    }
}

function punch() {
    playerSprite.action(playerPunch, 0, 0);
    hitSprites.push(sprite(leftHitSprite));
    setTimeout(reset,400);
}

function kick() {
    playerSprite.action(playerKick, 0, 0);
    hitSprites.push(sprite(rightHitSprite));
    setTimeout(reset, 400);
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