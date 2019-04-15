var canvas = document.getElementById("game-canvas")

var leftHit = new Image();
leftHit.src = "./src/assets/blastgreenfull.png"
var rightHit = new Image();
rightHit.src = "./src/assets/orangeblastfull.png"

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