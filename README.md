# Left-Punch Right-Kick 

## Introduction 
Draws inspiration from PC game, One Finger Death Punch and Android game, Stick Fight: Shadow Warrior 

* [One Finger Death Punch trailer](https://www.youtube.com/watch?v=R1j0VE6d-xE "One Finger Death Punch")

* [Stick Fight: Shadow Warrior gameplay](https://www.youtube.com/watch?v=WkuO8iqzXIA "Stick Fight: Shadow Warrior")

Enemies spawn from the left and right side and the player will have to hit arrow keys when they are close enough in order to kill them. Upon missing an enemy, player will either die in the enemy is within range and is in an attack animation frame. 

## MVPs

### Canvas
* Main component on screen with highscore component and links to Github, personal website, and LinkedIn
* Start screen with play button and basic tutorial
* Map background with minor animations to show movement 

### Player
* Player appears in the center of the map and has basic stance animations
* Player avatar responds to key clicks and attacks based on the keypress

### Enemies
* Enemies run in from both sides of the screen periodically
* Enemies will attack once within a certain distance of the player

### Hit Detection
* Enemies will die if the player is in an attack animation/sprite within a certain distance of the player
* The player will die if the enemies is within a certain distance and completes their attack animation

## Future TODOs

### Sound effects
- [ ] Add sound effects for attacking and dying. Sound effects for rain/wind?

### Rhythm game  
- [ ] Enemies will appear based on the BPM of the current song and will go along with the beat at where they should be hit

### Difficulty 
- [ ] Normal difficulty will be left, right, down, up. Hard difficulty will be 1 through 9 on the numpad 
