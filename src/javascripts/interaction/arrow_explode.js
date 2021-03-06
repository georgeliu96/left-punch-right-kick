var explosion = new Image();
explosion.src = "../../left-punch-right-kick/src/assets/spritesheet.png";

var canvas = document.getElementById("game-canvas");

export var arrowExplode = ({
    context: canvas,
    height: 100,
    width: 100,
    image: explosion,
    numberOfFrames: 10,
    ticksPerFrame: 1,
    yIndex: 1,
    dy: 40,
    scale: 2
})