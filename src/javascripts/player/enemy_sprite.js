import sprite from '../sprite'

var canvas = document.getElementById("game-canvas");

var leftEnemy = new Image ();
leftEnemy.src = "../src/assets/lightbandit_run_left.png";

export var leftSprite = sprite({
    context: canvas,
    height: 48,
    width: 48,
    image: leftEnemy,
    numberOfFrames: 8,
    ticksPerFrame: 5,
    dx: 0,
    dy: 325,
    sx: 336,
    reverse: -1
});

var rightEnemy = new Image ();
rightEnemy.src = "../src/assets/heavybandit_run.png"

export var rightSprite = sprite({
    context: canvas,
    height: 48, 
    width: 48,
    image: rightEnemy,
    numberOfFrames: 8,
    ticksPerFrame: 5,
    dx: 570,
    dy: 325
})

