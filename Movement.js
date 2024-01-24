var objetos = document.getElementsByClassName("objeto");
//console.log(objetos);

var limit_down = 890;
var limit_up = 360;
var limit_left = 320;
var limit_right = 1180;


function verifyAllCollisions(player_x, player_y) {
    for (var i = 0; i < objetos.length; i++) {
        if (verifyCollision(player_x, player_y, objetos[i]))
            return true;
    }
    return false;
}

function verifyCollision(player_x, player_y, objeto) {
    var player = document.getElementById("Main_Character");
    if (player_x < limit_left || player_x > limit_right ||
        player_y < limit_up || player_y > limit_down){
            console.log("Out of bounds");
            return true;
    }


    var objeto_x = objeto.offsetLeft;
    var objeto_y = objeto.offsetTop;
    var objWidth = (objeto.offsetWidth)/2;
    var objHeight = objWidth * (objeto.naturalHeight/objeto.naturalWidth);
    var playerWidth = (player.offsetWidth)/2;
    var playerHeight = playerWidth * (player.naturalHeight/player.naturalWidth);
    // Just in case we have to log anything
    
    //console.log(player_x, player_y);
    if(false){
        console.log(objeto.id);
        console.log(player_x, player_y);
        console.log(objeto_x, objeto_y);
        console.log(Math.abs(player_x - objeto_x));
        console.log(Math.abs(player_y - objeto_y));
        console.log(objWidth, objHeight);
        console.log(objeto.naturalWidth, objeto.naturalHeight);
        console.log(objWidth + playerWidth, objHeight + playerHeight);
    }

    

    if (inRange(player_x, objeto_x, objWidth + playerWidth) &&
        inRange(player_y, objeto_y, objHeight + playerHeight)){

        console.log("Collision with " + objeto.id);
        return true;
    }
    return false;
}

// boolean function inRange
function inRange(x1, x2, range) {
    if (Math.abs(x1 - x2) <= range)
        return true;
    return false;
}

// WASD to move

document.onkeydown = function(event) {
    
    var player = document.getElementById("Main_Character");
    var player_x = player.offsetLeft;
    var player_y = player.offsetTop;
    
    if (event.key == "a") {
        if (!verifyAllCollisions(player_x - 10, player_y))
            player.style.left = player_x - 10 + "px";
    }
    if (event.key == "d") {
        if (!verifyAllCollisions(player_x + 10, player_y))
            player.style.left = player_x + 10 + "px";
    }
    if (event.key == "w") {
        if (!verifyAllCollisions(player_x, player_y - 10))
            player.style.top = player_y - 10 + "px";    
    }
    if (event.key == "s") {
        if (!verifyAllCollisions(player_x, player_y + 10))
            player.style.top = player_y + 10 + "px";
    }
}


