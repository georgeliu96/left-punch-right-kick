import sprite from '../sprite';
import { handlePress } from '../interaction/keyPress';
import { leftHitSprite, rightHitSprite, upHitSprite, downHitSprite } from '../interaction/hit_sprite';

var canvas = document.getElementById("game-canvas");

var player = new Image(); 
player.src = "../../left-punch-right-kick/src/assets/player-sprite-3/adventurer-v1.5-Sheet.png"

var playerPunch = new Image();
playerPunch.src = "../../left-punch-right-kick/src/assets/player-sprite-4/reverse-punch.png"

var playerKick = new Image();
playerKick.src = "../../left-punch-right-kick/src/assets/player-sprite-4/forward-kick.png"

var playerUp = new Image ();
playerUp.src = "../../left-punch-right-kick/src/assets/player-up-attack.png";

var playerDown = new Image ();
playerDown.src = "../../left-punch-right-kick/src/assets/player-down-attack.png";

var playerSprite = sprite({
    context: canvas,
    height: 37,
    width: 50,
    image: player,
    numberOfFrames: 4,
    ticksPerFrame: 3,
    dx: (450 - 25) / 1.5 ,
    dy: (502 / 1.5),
    scale: 1.5
});


function reset() {
    playerSprite.action(player,0,0);
}

export var hitSprites = [];

var keyLeft = false;

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

var keyUp = false;

function handleUp(e) {
    if(e.type === "keyup") {
        keyUp = false;
    }else {
        if (!keyUp && playerSprite.image === player) {
            handlePress(e);
            keyUp = true;
            hitUp();
        }
    }
}

var keyDown = false; 

function handleDown(e) {
    if(e.type === "keyup") {
        keyDown = false;
    }else {
        if (!keyDown && playerSprite.image === player) {
            handlePress(e);
            keyDown = true;
            hitDown();
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

function hitUp() {
    playerSprite.action(playerUp, 0, 0);
    hitSprites.push(sprite(upHitSprite));
    setTimeout(reset, 400);
}

function hitDown() { 
    playerSprite.action(playerDown, 0, 0);
    hitSprites.push(sprite(downHitSprite));
    setTimeout(reset, 400);
}

export function handleKeydown(e) {
    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        handleLeft(e);
    }else if (e.code == "ArrowRight" || e.code == "KeyD") {
        handleRight(e);
    }else if (e.code == "ArrowUp" || e.code == "KeyW") {
        handleUp(e);
    }else if (e.code == "ArrowDown" || e.code == "KeyS") {
        handleDown(e);
    }
}

export function handleKeyup(e) {
    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        handleLeft(e);
    }else if (e.code == "ArrowRight" || e.code == "KeyD") {
        handleRight(e);
    }else if (e.code == "ArrowUp" || e.code == "KeyW") {
        handleUp(e);
    }else if (e.code == "ArrowDown" || e.code == "KeyS") {
        handleDown(e);
    }
}

export default playerSprite;