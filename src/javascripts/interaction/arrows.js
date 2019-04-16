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


function arrows(dx, key) {
    var image = "";
    let scale = 1;
    if (key === "down") {
        scale = (1.5/1.2)   
    } else if (key === "up") {
        scale = (1/1.2)
    }
        
    dx = dx * scale;
    if (dx < 280) {
        if (key === "left") {
            image = arrowLeft;
        }else {
            image = arrowDown;
        }
    }else if (dx > 280 && dx < 350) {
        if (key === "left") {
            image = litArrowLeft;
        }else {
            image = litArrowDown;
        }
    }else if (dx < 420 && dx > 350) {
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
    ctx.scale(1.2, 1.2);
    ctx.drawImage(
        image, 0, 0, 16, 16, (dx + 15), 300, 32, 32
    );
    ctx.scale(1/1.2, 1/1.2);
}

export default arrows;