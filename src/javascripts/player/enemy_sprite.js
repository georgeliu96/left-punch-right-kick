import sprite from '../sprite'

var canvas = document.getElementById("game-canvas");

var leftEnemy = new Image ();
leftEnemy.src = "./src/assets/lightbandit_run_left.png";

var leftAtk = new Image ();
leftAtk.src = "./src/assets/lightbandit_attack_left.png";

export var leftSprite = sprite({
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
    scale: 1.2
});

var rightEnemy = new Image ();
rightEnemy.src = "./src/assets/heavybandit_run.png"

var rightAtk = new Image ();
rightAtk.src = "./src/assets/heavybandit_attack.png";

export var rightSprite = sprite({
    context: canvas,
    height: 48, 
    width: 48,
    image: rightEnemy,
    numberOfFrames: 8,
    ticksPerFrame: 3,
    dx: (900/1.2),
    dy: (500/1.2),
    atkImg: rightAtk,
    scale: 1.2
})