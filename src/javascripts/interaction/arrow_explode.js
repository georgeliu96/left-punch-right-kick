var explosion = new Image();
explosion.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/spritesheet.png";

var canvas = document.getElementById("game-canvas");

export var arrowExplode = ({
    context: canvas,
    height: 100,
    width: 100,
    image: explosion,
    numberOfFrames: 10,
    ticksPerFrame: 1,
    yIndex: 1,
    dy: 330,
})