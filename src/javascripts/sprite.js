var canvas = document.getElementById("game-canvas"), 
    ctx = canvas.getContext("2d");

var background = new Image();
    background.src = "../src/assets/Background.png";

function sprite(options) {
    var that = {},
    tickCount = 0,
    ticksPerFrame = options.ticksPerFrame || 0;

    that.numberOfFrames = options.numberOfFrames || 1;
    that.frameIndex = 0;
    that.context = options.context.getContext("2d");
    that.height = options.height;
    that.width = options.width; 
    that.image = options.image;
    that.dx = options.dx || 0;
    that.dy = options.dy || 0;
    that.sx = options.sx || 0;
    that.atkImg = options.atkImg || "";
    that.reverse = options.reverse || 1;
    that.scale = options.scale || 1;


    that.render = () => {
        that.context.scale(that.scale,that.scale);
        that.context.drawImage(
            that.image, that.sx + (that.frameIndex * that.width * that.reverse), 0, that.width, that.height, that.dx, that.dy, that.width, that.height
        );
        that.context.scale(1/that.scale, 1/that.scale);
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
            if (that.frameIndex < that.numberOfFrames - 1) {
                that.frameIndex += 1;
            } else {
                that.frameIndex = 0;
            }
        }
    };

    //dir = -1 || 1 for left || right respectively
    that.run = (dir) => {
        var total_dx = (dir === 1) ? (
            that.dx
        ) : ((852 / that.scale) - that.dx)
        if (total_dx < (400 / that.scale)) {
            that.dx += 1 * dir;
        }else {
            that.image = that.atkImg; 
        }
    }

    that.action = (image, x, y) => {
        that.image = image;
        that.sx = x;
        that.sy = y;
        that.frameIndex = 0;
    }

    return that;
}

export default sprite;