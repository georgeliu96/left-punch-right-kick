import currentEnemies from '../player/difficulty_enemies';

var dyingLeft = new Image ();
dyingLeft.src = "../../left-punch-right-kick/src/assets/lightbandit_death_left.png";

var dyingRight = new Image ();
dyingRight.src = "../../left-punch-right-kick/src/assets/heavybandit_death.png";

var dyingUp = new Image ();
dyingUp.src = "../../left-punch-right-kick/src/assets/minotaur-death.png";

var dyingDown = new Image ();
dyingDown.src = "../../left-punch-right-kick/src/assets/Skeleton-Dead.png";

var dyingEnemies = [];

export var handlePress = (e) => {
    if (currentEnemies.length > 0) {
        for(let i = 0; i < Math.min(currentEnemies.length, 2); i++) {
            if (e.code === "ArrowLeft" || e.code === "KeyA") {
                if(currentEnemies[i].dx > 280 && currentEnemies[i].key === "left") {
                    currentEnemies[i].image = dyingLeft;
                    currentEnemies[i].frameIndex = 0;
                    currentEnemies[i].sx = 0;
                    currentEnemies[i].reverse = 1;
                    currentEnemies[i].numberOfFrames = 10;

                    dyingEnemies.push(currentEnemies[i]);
                    currentEnemies.splice(i, 1);
                }
            }else if (e.code === "ArrowUp" || e.code === "KeyW"){
                if(currentEnemies[i].dx < 420 && currentEnemies[i].key === "up") {
                    currentEnemies[i].image = dyingUp;
                    currentEnemies[i].numberOfFrames = 6; 
                    currentEnemies.frameIndex = 0;
                    dyingEnemies.push(currentEnemies[i]);
                    currentEnemies.splice(i,1);
                }
            }else if (e.code === "ArrowDown" || e.code === "KeyD"){
                if(currentEnemies[i].dx > 280 && currentEnemies[i].key === "down") {
                    currentEnemies[i].image = dyingDown; 
                    currentEnemies[i].numberOfFrames = 15;
                    currentEnemies[i].ticksPerFrame = 1;
                    currentEnemies[i].frameIndex = 0;
                    dyingEnemies.push(currentEnemies[i]);
                    currentEnemies.splice(i,1);  
                }
            }else {
                if(currentEnemies[i].dx < 420 && currentEnemies[i].key === "right") {
                    currentEnemies[i].image = dyingRight;
                    currentEnemies[i].numberOfFrames = 10;
                    currentEnemies[i].frameIndex = 0;
                    currentEnemies[i].sx = 432;
                    currentEnemies[i].reverse = -1;
                    dyingEnemies.push(currentEnemies[i]);
                    currentEnemies.splice(i,1);
                }
            }
        }
    }
}

export default dyingEnemies;