var canvas = document.getElementById("game-canvas"), 
    ctx = canvas.getContext("2d");

var background = new Image();
    background.src = "../src/assets/Background.png";

function sprite(options) {
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context.getContext("2d");
    that.height = options.height;
    that.width = options.width; 
    that.image = options.image;
    that.dx = options.dx || 0;
    that.dy = options.dy || 0;
    that.sx = options.sx || 0;
    that.reverse = options.reverse || 1;


    that.render = () => {
        that.context.scale(1.5,1.5);
        that.context.drawImage(
            that.image, that.sx + (frameIndex * that.width * that.reverse), 0, that.width, that.height, that.dx, that.dy, that.width, that.height
        );
        that.context.scale(2/3, 2/3);
    } 

    that.frameStep = () => {
        that.context.clearRect(0, 0, 900, 616);
        ctx.drawImage(background, 0, 0)
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

    //dir = -1 || 1 for left || right respectively
    that.run = (dir) => {
        var total_dx = (dir === 1) ? (
            that.dx
        ) : (900 - that.dx)
        if (total_dx < 400) {
            that.dx += 1 * dir;
        }
    }

    that.action = (image, x, y) => {
        that.image = image;
        that.sx = x;
        that.sy = y;
        frameIndex = 0;
    }

    return that;
}

export default sprite;