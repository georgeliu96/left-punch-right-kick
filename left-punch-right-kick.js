var canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

var background = new Image();
background.src = "left-punch-right-kick%20assets/Background.png";

background.onload = () => {
    ctx.drawImage(background,0,0)
    gameLoop();
}

function gameLoop() {

    window.requestAnimationFrame(gameLoop)

    plyrSprt.update();
    plyrSprt.render();
}


var player = new Image(); 
player.src = "left-punch-right-kick%20assets/player-sprite-4/adventurer-hand-combat-Sheet.png"

function sprite(options) {
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;
        numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context.getContext("2d");
    that.height = options.height;
    that.width = options.width; 
    that.image = options.image;

    that.render = () => {

        that.context.clearRect(0, 0, 900, 616);
        ctx.drawImage(background,0,0)
        that.context.scale(1.5,1.5);
        that.context.drawImage(
            that.image, frameIndex * that.width, 0, that.width, that.height, 297, 335, that.width, that.height
        );
        that.context.scale(2/3, 2/3);
    }

    that.loop = options.loop;

    that.update = () => {
        tickCount += 1;
        if (tickCount > ticksPerFrame) {
            tickCount = 0;
            if (frameIndex < numberOfFrames - 1) {
                frameIndex += 1;
            } else {
                frameIndex = 0;
            }
        }
    };

    return that 
}

var plyrSprt = sprite({
    context: canvas,
    height: 37,
    width: 50,
    image: player,
    numberOfFrames: 4,
    ticksPerFrame: 10
})