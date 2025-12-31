// Load Name
let username = "somu"

// Typing Text Animation
let text = `Happy New Year ${username}`;
let i = 0;
function type(){
    if(i < text.length){
        document.getElementById("newyearText").innerHTML = text.slice(0, i+1);
        i++;
        setTimeout(type, 120);
    }
}
type();

// Firework Canvas Animation
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function random(min, max){
    return Math.random() * (max - min) + min;
}

class Firework {
    constructor(){
        this.x = random(0, canvas.width);
        this.y = canvas.height;
        this.targetY = random(50, canvas.height / 2);
        this.speed = random(4, 7);
        this.color = `hsl(${random(0,360)},100%,50%)`;
    }
    update(){
        this.y -= this.speed;
        if(this.y <= this.targetY){
            for(let i=0;i<100;i++){
                particles.push(new Particle(this.x, this.y, this.color));
            }
            fireworks.splice(fireworks.indexOf(this), 1);
        }
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Particle {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = random(1,5);
        this.angle = random(0, Math.PI * 2);
        this.alpha = 1;
    }
    update(){
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= 0.02;
        if(this.alpha <= 0) particles.splice(particles.indexOf(this),1);
    }
    draw(){
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,2,0,Math.PI*2);
        ctx.fill();
        ctx.restore();
    }
}

let fireworks = [];
let particles = [];

function animate(){
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    if(Math.random() < 0.05){
        fireworks.push(new Firework());
    }

    fireworks.forEach(f => {f.update(); f.draw();});
    particles.forEach(p => {p.update(); p.draw();});
}
animate();

// After 6 sec go to main page
setTimeout(()=>{
    window.location.href = "Home.html";
}, 6000);
