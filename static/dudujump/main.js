const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scoreDiv = document.getElementById('score');
const thanks = document.getElementById('thanks');
let thanksHue = 0;

const width = 1000;
const height = 600;

const friction = 0.98;
const moveSpeed = 1.7;
const gravity = 0.1;
const jump = 6.3;

const duduRadius = 32;
let duduX = 0;
let duduY = height - 100;
let duduVelX = 0;
let duduVelY = 0;

let cameraY = 0;

const keyMap = {
    37: 'left',
    39: 'right',
    38: 'up'
};

let keyState = {
    left: false,
    right: false,
    up: false
};

const platforms = [[300, 500]];
const floor = [0, height, width, 100];

setInterval(tick, 1 / 60);

const duduImage = new Image();             
duduImage.src = "dudu.png";   

const duduImageF = new Image();             
duduImageF.src = "duduFlip.png";         

const suppliesImage = new Image();             
suppliesImage.src = "supplies.png";     

for (let i = 0; i < 300; i++) {
    let last = platforms[platforms.length - 1].slice();
    last[1] -= 180;
    let dir = (Math.random() < 0.5 ? -1 : 1);
    const pos = ((Math.random() * 80) + 300);
    const newpos = last[0] + (dir * pos);
    if (newpos < 0 || newpos + suppliesImage.width > width) {
        dir *= -1;
    }
    last[0] += dir * pos;
    platforms.push(last);
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    return  ((x1 < x2 + w2 && x1 > x2) ||
            (x1 + w1 > x2 && x1 + w1 < x2 + w2)) &&
            ((y1 < y2 + h2 && y1 > y2) ||
            (y1 + h1 > y2 && y1 + h1 < y2 + h2));
}

let onPlatform = false;
let highestY = height;

function calculateScore(y) {
    return (height - parseInt(y)) / 100;
}
function tick() {
    thanks.style.color = `hsl(${thanksHue}, 100%, 50%)`;
    thanksHue += 1;
    if (thanksHue > 360) thanksHue = 0;
    
    highestY = Math.min(highestY, duduY);
    scoreDiv.innerHTML = `DUDUJUMP: ${calculateScore(duduY)}, Highest ${calculateScore(highestY)}`;
    ctx.fillStyle = '#191919';
    ctx.fillRect(0, 0, width, height);

    if (duduVelX <= 0) {
        ctx.drawImage(duduImage,
            duduX,
            duduY - cameraY);  
    } else {
        ctx.drawImage(duduImageF,
            duduX,
            duduY - cameraY);  
    }
    
    ctx.fillStyle = '#422b17';
    ctx.fillRect(floor[0], floor[1] - cameraY, floor[2], floor[3]);
    if (duduY - cameraY < 200) {
        cameraY -= 10;
    }
    else if (duduY - cameraY > height - 100) {
        cameraY += 10;
    }
    for (let i = 0; i < platforms.length; i++) {
        ctx.drawImage(suppliesImage,
            platforms[i][0],
            platforms[i][1] - cameraY);
    }
    if (keyState.left) {
        duduVelX = -moveSpeed;
    }
    else if (keyState.right) {
        duduVelX = moveSpeed;
    }

    if (keyState.up && onPlatform) {
        duduVelY = -jump;
    }
    onPlatform = false;
    duduVelX *= friction;
    duduVelY += gravity;
    for (let i = 0; i < platforms.length; i++) {
        if (rectIntersect(duduX + duduVelX, duduY, duduImage.width, duduImage.height,
            platforms[i][0], platforms[i][1], suppliesImage.width, suppliesImage.height)) {
            duduVelX = 0;
        }
        if (rectIntersect(duduX, duduY + duduVelY, duduImage.width, duduImage.height,
            platforms[i][0], platforms[i][1], suppliesImage.width, suppliesImage.height)) {
                duduVelY = 0;
            onPlatform = true;
        }
    }
    if (rectIntersect(duduX + duduVelX, duduY + duduVelY, duduImage.width, duduImage.height,
        ...floor)) {
        if (duduVelY > 0) {
            duduVelY = 0;
            onPlatform = true;
        }
    }
    duduX += duduVelX;
    duduY += duduVelY;

    if (duduX < 0) duduX = 0;
    if (duduX > width) duduX = width;
    if (duduY > height) duduY = height;
}

document.addEventListener('keydown', function(e) {
    if (keyMap[e.which]) {
        keyState[keyMap[e.which]] = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (keyMap[e.which]) {
        keyState[keyMap[e.which]] = false;
    }
});
