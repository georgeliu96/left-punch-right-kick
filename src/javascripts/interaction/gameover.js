var leftAtk = new Image ();
leftAtk.src = "../../left-punch-right-kick/src/assets/lightbandit_attack_left.png";

var rightAtk = new Image ();
rightAtk.src = "../../left-punch-right-kick/src/assets/heavybandit_attack.png";

var upAtk = new Image ();
upAtk.src = "../../left-punch-right-kick/src/assets/minotaur-attack.png";

var downAtk = new Image ();
downAtk.src = "../../left-punch-right-kick/src/assets/cyclops_attack.png";

var canvas = document.getElementById("game-canvas"),
    ctx = canvas.getContext("2d");

var background = new Image();
background.src = "../../left-punch-right-kick/src/assets/Background.png";

function gameover(enemies) {
    if (enemies.length) {
        for(let i = 0; i < Math.min(enemies.length, 2); i++) {
            if ((enemies[i].image.src === leftAtk.src && enemies[i].frameIndex === 7) || 
                (enemies[i].image.src === rightAtk.src && enemies[i].frameIndex === 0 ) ||
                (enemies[i].image.src === upAtk.src && enemies[i].frameIndex === 7) || 
                (enemies[i].image.src === downAtk.src && enemies[i].frameIndex === 5)) {
                return true;
            }
        }
    }
    return false;
}

export function renderGameover () {
    let f = new FontFace('Press Start 2P', 'url(https://fonts.gstatic.com/s/pressstart2p/v7/e3t4euO8T-267oIAQAu6jDQyK3nYivN04w.woff2)');
    f.load().then(() => {
        ctx.clearRect(0, 0, 900, 600);
        ctx.drawImage(background, 0, 0);

        var header = "Game Over";
        ctx.font = '40px "Press Start 2P"'
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(header, canvas.width/2, canvas.height/2);

        var restartText = "Click anywhere to restart."
        ctx.font = '20px "Press Start 2P"'
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(restartText, canvas.width/2, canvas.height * 2/3);

        canvas.addEventListener("click", listener);
    })
}

function listener() {
    window.location.reload();
    canvas.removeEventListener("click", listener);
}

export default gameover;