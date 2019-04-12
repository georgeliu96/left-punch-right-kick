import currentEnemies from '../player/difficulty_enemies';

var leftAtk = new Image ();
leftAtk.src = "../src/assets/lightbandit_attack_left.png";

var rightAtk = new Image ();
rightAtk.src = "../src/assets/heavybandit_attack.png";

function gameover(enemies) {
    if (enemies.length) {
        for(let i = 0; i < Math.min(enemies.length, 2); i++) {
            if (
                (enemies[i].image.src === leftAtk.src || 
                    enemies[i].image.src === rightAtk.src) && 
                    currentEnemies[i].frameIndex === 7) {
                debugger 
                return true;
            }
        }
    }
    return false;
}

export default gameover;