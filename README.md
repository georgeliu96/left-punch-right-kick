# Left-Punch Right-Kick 

Technologies Used: Google Firebase, Spritesheets from itch.io and Sprite animations
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)  [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)  [![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)

Live Site: [Left Punch Right Kick](https://saphknight.github.io/left-punch-right-kick/ "Left Punch Right Kick")

![alt text][lprkdemo]

[lprkdemo]: https://github.com/saphknight/left-punch-right-kick/blob/master/src/assets/Game%20Demo.PNG "Game Demo"

## Introduction 
Draws inspiration from PC game, One Finger Death Punch and Android game, Stick Fight: Shadow Warrior 

* [One Finger Death Punch trailer](https://www.youtube.com/watch?v=R1j0VE6d-xE "One Finger Death Punch")

* [Stick Fight: Shadow Warrior gameplay](https://www.youtube.com/watch?v=WkuO8iqzXIA "Stick Fight: Shadow Warrior")

Enemies spawn from the left and right side and the player will have to hit arrow keys when they are close enough in order to kill them. Upon missing an enemy, player will either die in the enemy is within range and is in an attack animation frame. 

## Main Features

### Canvas

![alt text][lprkcanvas]

[lprkcanvas]: https://github.com/saphknight/left-punch-right-kick/blob/master/src/assets/main-screen.PNG "Game Canvas"

* Main component on screen with highscore component and links to Github, personal website, and LinkedIn
* Start screen with play button. Basic tutorial on left side of the website
* Map background with minor animations or parallax movement to imitate a changing setting (to add later) 


### Player

* Player appears in the center of the map and has basic stance animations
* Player avatar responds to key clicks and performs attacks based on the keypress

Hardest part was making sure that players couldn't spam a certain key to continuously do one attack or hold down a button. To fix this, event listeners were added on both keyup and keydown and a timeout was used to prevent spamming. 

```javascript
//player_sprite.js

var keyDown = false; 

function handleDown(e) {
    if(e.type === "keyup") {
        keyDown = false;
    }else {
        if (!keyDown && playerSprite.image === player) {
            handlePress(e);
            keyDown = true;
            hitDown();
        }
    }
}

function punch() {
    playerSprite.action(playerPunch, 0, 0); // sets animation to the corresponding attack animation
    hitSprites.push(sprite(leftHitSprite));
    setTimeout(reset,400);
}

function reset() {
    playerSprite.action(player,0,0);  // resets animation to idle stance animation 
}
```

### Enemies
* Enemies run in from both sides of the screen periodically
* Enemies will attack once within a certain distance of the player
* Enemies start appearing faster and faster as the game goes on

```javascript
var diff = 1;

export var spawnEnemy = () => {
    const possibleEnemies = [sprite(leftSprite), sprite(rightSprite), sprite(upSprite), sprite(downSprite)];
    setTimeout(() => {
        diff += 0.1;
        currentEnemies.push(possibleEnemies[Math.floor(Math.random() * 4)]);
        spawnEnemy();
        }, (2000 / Math.min(diff,4)))
}
```
Enemies continously spawn in at a faster and faster pace until the cap of 500ms is reached. 

### Hit Detection

![alt text][lprkenemy]

[lprkenemy]: https://github.com/saphknight/left-punch-right-kick/blob/master/src/assets/hitdetection.PNG "Hit Detection"

* Enemies will die if the player is in an attack animation/sprite within a certain distance of the player
* The player will die if the enemies is within a certain distance and completes their attack animation

### Arrow keys

![alt text][lprkarrows]

[lprkarrows]: https://github.com/saphknight/left-punch-right-kick/blob/master/src/assets/game-arrows.PNG "Game Arrows"

* Arrow keys appear above the enemy corresponding to the key needed to kill the enemy
* Arrow keys light up when the enemy is within "kill distance" of the player 

### Explosions

![alt text][lprkexplosions]

[lprkexplosions]: https://github.com/saphknight/left-punch-right-kick/blob/master/src/assets/game-explosions.PNG "Game Explosions"

* Upon killing an enemy, an explosion appears in the top half of the game, at a random x coordinate 
* Serves to add extra animation in the game but also as a distraction to the player

### Hiscores

![alt text][lprkhiscore]

[lprkhiscore]: https://github.com/saphknight/left-punch-right-kick/blob/master/src/assets/Gameover.PNG "Hiscores"

* Once the game is complete, the game presents a screen in which you can enter initials and save your hiscore
* Scores are saved to Google Firebase and shown on screen as soon as a new score is entered 

## Future TODOs

### Sound effects
- [ ] Add sound effects for attacking and dying. Sound effects for rain/wind?

### Rhythm game  
- [ ] Enemies will appear based on the BPM of the current song and will go along with the beat at where they should be hit

### Difficulty 
- [ ] Normal difficulty will be left, right, down, up. Hard difficulty will be 1 through 9 on the numpad 
