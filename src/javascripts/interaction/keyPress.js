import currentEnemies from '../player/difficulty_enemies';

// var canvas = document.getElementById("game-canvas");

var dyingLeft = new Image ();
// dyingLeft.src = "./assets"

// export var dyingEnemies = [];

var handlePress = (e) => {
    if (currentEnemies.length > 0) {
        for(let i = 0; i < Math.min(currentEnemies.length, 2); i++) {
            if (e.code === "ArrowLeft" || e.code === "KeyA") {
                if(currentEnemies[i].dx > 300 && currentEnemies[i].reverse === -1) {
                    currentEnemies.splice(i, 1);
                }
            }else {
                if(currentEnemies[i].dx < 400 && currentEnemies[i].reverse === 1) {
                    currentEnemies.splice(i,1);
                }
            }
        }
    }
}

export default handlePress;