var leftAtk = new Image ();
leftAtk.src = "../../left-punch-right-kick/src/assets/lightbandit_attack_left.png";

var rightAtk = new Image ();
rightAtk.src = "../../left-punch-right-kick/src/assets/heavybandit_attack.png";

var upAtk = new Image ();
upAtk.src = "../../left-punch-right-kick/src/assets/minotaur-attack.png";

var downAtk = new Image ();
downAtk.src = "../../left-punch-right-kick/src/assets/cyclops_attack.png";


function gameover(enemies) {
    if (enemies.length) {
        for(let i = 0; i < Math.min(enemies.length, 2); i++) {
            if (((enemies[i].image.src === leftAtk.src && enemies[i].frameIndex === 7) || 
                (enemies[i].image.src === rightAtk.src && enemies[i].frameIndex === 0 )) ||
                ((enemies[i].image.src === upAtk.src && enemies[i].frameIndex === 7) || 
                (enemies[i].image.src === downAtk.src && enemies[i].frameIndex === 5))) {
                return true;
            }
        }
    }
    return false;
}

export default gameover;