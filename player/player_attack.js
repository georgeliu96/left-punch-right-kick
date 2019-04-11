var playerAttack = new Image();
playerAttack.src="../left-punch-right-kick%20assets/player-sprite-4/adventurer-hand-combat-Sheet.png"


function handleKeydown(e) {

    if (e.code == "ArrowRight" || e.code == "KeyD") {
        window.alert("Right")
    }else if (e.code == "ArrowLeft" || e.code == "KeyA") {
        window.alert("Left")
    }
}

function handleKeyup(e) {
    
}

export default handleKeydown;

