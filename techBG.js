const canvas = document.querySelector('#techBG');
const ctx = canvas.getContext('2d');

let CW = canvas.width = window.innerWidth;
let CH = canvas.height = window.innerHeight;

const dotArr = [];

class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = Math.random();
        this.dy = Math.random();
        this.size = Math.floor(Math.random() * 100 +3);
        this.col = 'rgba(255,255,255,.04)';

    }
    update() {
        if (this.x + this.size > CW) {
            this.dx = this.dx * -1;
        }
        if (this.y + this.size > CH) {
            this.dy = this.dx * -1;
        }
        if (this.x <= 0) this.dx *= -1;
        if (this.y <= 0) this.dy *= -1;
        this.x += this.dx;
        this.y += this.dy;
    }
    draw() {
        ctx.fillStyle = this.col;
        // ctx.shadowColor = 'violet';
        // ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}

function populate(q) {
    for (let i = 0; i<q; i++) {
        let x = Math.random() * CW;
        let y = Math.random() * CH;
        dotArr.push( new Dot(x, y));
    }
}
populate(100);

function loop() {
    
    ctx.clearRect(0, 0, CW, CH);
    requestAnimationFrame(loop);
    for (elem of dotArr) {
        elem.update();
        elem.draw();
    }
}
loop();