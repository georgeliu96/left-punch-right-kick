import sprite from '../sprite';
import { leftSprite, rightSprite, upSprite, downSprite } from './enemy_sprite';

var diff = 1;

var currentEnemies = [sprite(leftSprite)];
 
export var spawnEnemy = () => {
    const possibleEnemies = [sprite(leftSprite), sprite(rightSprite), sprite(upSprite), sprite(downSprite)];
    setTimeout(() => {
        diff += 0.1;
        currentEnemies.push(possibleEnemies[Math.floor(Math.random() * 4)]);
        spawnEnemy();
        }, (2000 / Math.min(diff,4)))
}




export default currentEnemies;