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

var config = {
    apiKey: "AIzaSyBiqGeNpymYIY8kpPq5Ur46Gb3bsM-ON9E",
    authDomain: "left-punch-right-kick.firebaseapp.com",
    databaseURL: "https://left-punch-right-kick.firebaseio.com",
    projectId: "left-punch-right-kick",
    storageBucket: "",
    messagingSenderId: "833153453509"
};
firebase.initializeApp(config);

const database = firebase.database();
const ref = database.ref('scores');

ref.on('value', dataCB, errorCB);

var hiscores = [];

function dataCB(data) {
    const scores = data.val();
    const keys = Object.keys(data.val());
    for(let i = 0; i < keys.length; i++) {
        hiscores[i] = (Object.values(scores[keys[i]]));
        if (hiscores[i][0].length > 6) {
            hiscores[i][0] = hiscores[i][0].slice(0, 7) + "...";
        }
    }
    hiscores.sort((a,b) => {
        return b[1] - a[1];
    })
    hiscores = hiscores.slice(0, 10);
}

function errorCB(e) {
    console.log(e);
}

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

function renderText() {
    ctx.clearRect(0, 0, 900, 600);
    ctx.drawImage(background, 0, 0);

    var header = "Game Over";
    ctx.font = '40px "Press Start 2P"';
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(header, canvas.width/2, canvas.height/5);


    if (form.style.display === "flex") {
        var hiFont = "Type your initials and hit enter"
        ctx.font = '14px "Press Start 2P"';
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(hiFont, canvas.width/2,canvas.height * 5 / 20)
    }

    var restartText = "Press Space to restart.";
    ctx.font = '20px "Press Start 2P"';
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(restartText, canvas.width / 2, canvas.height * 9 / 10);

    ctx.font = '14px "Press Start 2P"';
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Initials", canvas.width * 2 / 5, canvas.height * 2 / 5);

    ctx.fillText("Scores", canvas.width * 3 / 5, canvas.height * 2 / 5);
    
    ctx.textAlign = "left";
    ctx.font = '10px "Press Start 2P"';
    ctx.fillStyle = "#ffffff";
    hiscores.forEach((hiscore, i) => {
        ctx.fillText(hiscore[0], canvas.width * 5 / 14, (canvas.height * 2 / 5) + (canvas.height / 25 * (i + 1)));
        ctx.fillText(hiscore[1], canvas.width * 3 / 5, (canvas.height * 2 / 5) + (canvas.height / 25 * (i + 1)));
    })
}

var form = document.getElementsByClassName("hiscore-form")[0];

function handleSubmit(e, score) {
    e.preventDefault();
    form.style.display = "none";
    ref.push({name: e.target[0].value, score: score});
    renderText();
    form.removeEventListener('submit', (e) => handleSubmit(e, score));
}

export function renderGameover (score) {
    let f = new FontFace('Press Start 2P', 'url(https://fonts.gstatic.com/s/pressstart2p/v7/e3t4euO8T-267oIAQAu6jDQyK3nYivN04w.woff2)');
    form.style.display = "flex";

    f.load().then(() => {

        renderText();
        document.addEventListener("keydown", e => listener(e));
    })
    form.addEventListener('submit', (e) => handleSubmit(e, score));
}

function listener(e) {
    if (e.code === "Space") {
        window.location.reload();
        document.removeEventListener("keydown",e => listener(e));
    }
}

export default gameover;