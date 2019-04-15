var leftAtk = new Image ();
leftAtk.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/lightbandit_attack_left.png";

var rightAtk = new Image ();
rightAtk.src = "https://github.com/saphknight/left-punch-right-kick/tree/master/src/assets/heavybandit_attack.png";

function gameover(enemies) {
    if (enemies.length) {
        for(let i = 0; i < Math.min(enemies.length, 2); i++) {
            if ((enemies[i].image.src === leftAtk.src && enemies[i].frameIndex === 7) || 
                (enemies[i].image.src === rightAtk.src && enemies[i].frameIndex === 0 )) {
                return true;
            }
        }
    }
    return false;
}

export default gameover;