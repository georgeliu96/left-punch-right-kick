var canvas = document.getElementById("game-canvas")

var leftHit = new Image();
leftHit.src = "../../left-punch-right-kick/src/assets/blastgreenfull.png";
var rightHit = new Image();
rightHit.src = "../../left-punch-right-kick/src/assets/orangeblastfull.png";
var upHit = new Image();
upHit.src = "../../left-punch-right-kick/src/assets/up-hit.png";
var downHit = new Image ();
downHit.src = "../../left-punch-right-kick/src/assets/down-hit.png";

export var leftHitSprite = {
    context: canvas,
    height: 64,
    width: 64,
    image: leftHit,
    numberOfFrames: 8,
    ticksPerFrame: 1,
    dx: 380,
    dy: 500,
};

export var rightHitSprite = {
    context: canvas,
    height: 64,
    width: 64,
    image: rightHit,
    numberOfFrames: 10,
    ticksPerFrame: 1,
    dx: 480,
    dy: 500,
};

export var upHitSprite = {
    context: canvas, 
    height: 64, 
    width: 64,
    image: upHit,
    numberOfFrames: 10,
    ticksPerFrame: 1,
    dx: 460,
    dy: 500
}

export var downHitSprite = {
    context: canvas, 
    height: 64,
    width: 64,
    image: downHit,
    numberOfFrames: 10,
    ticksPerFrame: 1,
    dx: 400,
    dy: 500
}