var canvas = document.getElementById("game-canvas")

var leftHit = new Image();
leftHit.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/blastgreenfull.png"
var rightHit = new Image();
rightHit.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/orangeblastfull.png"

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