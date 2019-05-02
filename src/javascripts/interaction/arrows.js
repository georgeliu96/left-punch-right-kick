var canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

var arrowLeft = new Image ();
arrowLeft.src = "../../left-punch-right-kick/src/assets/keyboard-white-left.png";

var litArrowLeft = new Image ();
litArrowLeft.src = "../../left-punch-right-kick/src/assets/keyboard-white-lit-left.png";

var arrowRight = new Image ();
arrowRight.src = "../../left-punch-right-kick/src/assets/keyboard-white-right.png";

var litArrowRight = new Image ();
litArrowRight.src = "../../left-punch-right-kick/src/assets/keyboard-white-lit-right.png";

var arrowUp = new Image ();
arrowUp.src = "../../left-punch-right-kick/src/assets/keyboard-white-up.png"

var litArrowUp = new Image ();
litArrowUp.src = "../../left-punch-right-kick/src/assets/keyboard-white-lit-up.png"

var arrowDown = new Image ();
arrowDown.src = "../../left-punch-right-kick/src/assets/keyboard-white-down.png";

var litArrowDown = new Image ();
litArrowDown.src = "../../left-punch-right-kick/src/assets/keyboard-white-lit-down.png";


function arrows(dx, scale, width, key) {
    var image = "";
    
    //x pos on screen between 0-900
    dx = dx * scale;
    if ((dx + (width * scale)) < 350) {
        if (key === "left") {
            image = arrowLeft;
        }else {
            image = arrowDown;
        }
    }else if ((dx + (width * scale)) > 350 && dx < 425) {
        if (key === "left") {
            image = litArrowLeft;
        }else {
            image = litArrowDown;
        }
    }else if (dx > 450 && dx < 575) {
        if (key === "right") {
            image = litArrowRight;
        }else {
            image = litArrowUp;
        }
    }else {
        if (key === "right") {
            image = arrowRight;
        }else {
            image = arrowUp;
        }
    }

    const arrowScale = 1.8; 

    ctx.scale(arrowScale, arrowScale);
    ctx.drawImage(
        image, 0, 0, 16, 16, (dx + (width * scale / 2) - (16 * arrowScale)) / arrowScale, 350 / arrowScale, 32, 32
    );
    ctx.scale(1/arrowScale, 1/arrowScale);
}

export default arrows;