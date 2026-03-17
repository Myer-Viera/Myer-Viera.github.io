const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let vx = 6;
let vy = 7;
let gravity = 1;

function move(){
    ctx.clearRect(0, 0, 600,600);

    if(x > 550 || x < 0){
        vx = vx *-1;
    }

    if(y > 550 || y < 0){
        vy = vy *-1;
    }
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = "blue";
    requestAnimationFrame(move);
}

move();

//event handler
function handleKeydown(e){
    console.log(e.key);
    if(e.key == "ArrowDown"){
        y = y + vy;
    }
    else if(e.key == "ArrowUp"){
        y = y - vy;
    }
    else if(e.key == "ArrowLeft"){
        x = x - vx;
    }
    else if(e.key == "ArrowRight"){
        x = x + vx;
}
}
document.addEventListener('keydown', handleKeydown); 