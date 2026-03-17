const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let vx = 6;
let vy = 7;
let gravity = 1;

function move(){
    ctx.clearRect(x, 0, 600,600);
    x = x + vx;
    y = y + vy;
    vy = vy + gravity;

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