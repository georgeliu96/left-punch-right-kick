var canvas = document.getElementById("game-canvas");

var leftEnemy = new Image ();
leftEnemy.src = "../../left-punch-right-kick/src/assets/lightbandit_run_left.png";

var leftAtk = new Image ();
leftAtk.src = "../../left-punch-right-kick/src/assets/lightbandit_attack_left.png";

export var leftSprite = {
    context: canvas,
    height: 48,
    width: 48,
    image: leftEnemy,
    numberOfFrames: 8,
    ticksPerFrame: 3,
    dx: (-48 / 1.2),
    dy: (500 / 1.2),
    sx: 336,
    reverse: -1,
    atkImg: leftAtk,
    scale: 1.2,
    key: "left"
};

var rightEnemy = new Image ();
rightEnemy.src = "../../left-punch-right-kick/src/assets/heavybandit_run.png"

var rightAtk = new Image ();
rightAtk.src = "../../left-punch-right-kick/src/assets/heavybandit_attack.png";

export var rightSprite = {
    context: canvas,
    height: 48, 
    width: 48,
    image: rightEnemy,
    numberOfFrames: 8,
    ticksPerFrame: 3,
    dx: (900/1.2),
    dy: (500/1.2),
    atkImg: rightAtk,
    scale: 1.2,
    key: "right"
};

var upEnemy = new Image ();
upEnemy.src = "../../left-punch-right-kick/src/assets/minotaur-run.png";

var upAtk = new Image ();
upAtk.src = "../../left-punch-right-kick/src/assets/minotaur-attack.png";


export var upSprite = {
    context: canvas,
    height: 96,
    width: 96,
    image: upEnemy,
    numberOfFrames: 8,
    ticksPerFrame: 5,
    dx: 900,
    dy: 490,
    atkImg: upAtk,
    key: "up"
};

var downEnemy = new Image ();
downEnemy.src = "../../left-punch-right-kick/src/assets/cyclops_run.png";

var downAtk = new Image ();
downAtk.src = "../../left-punch-right-kick/src/assets/cyclops_attack.png";


export var downSprite = {
    context: canvas,
    height: 64,
    width: 64, 
    image: downEnemy, 
    numberOfFrames: 6, 
    ticksPerFrame: 5,
    dx: 0,
    dy: 308,
    scale: 1.5,
    atkImg: downAtk,
    key: "down"
};