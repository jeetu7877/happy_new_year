// Flip on click
function flipCard(){
    document.querySelector(".card").classList.toggle("flip");
}

// Name show (optional - from login page)
let name = "somu";
if(name){
    document.querySelector("h3").innerHTML = `Happy New Year, ${name} 💕`;
}


// ========== Animated Firework Background ========== //
const canvas = document.getElementById("bgAnimation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max){
  return Math.random() * (max - min) + min;
}

class Firework {
  constructor(){
    this.x = random(0, canvas.width);
    this.y = canvas.height;
    this.targetY = random(100, canvas.height / 2);
    this.speed = random(4, 7);
    this.color = `hsl(${random(0, 360)}, 100%, 50%)`;
  }
  update(){
    this.y -= this.speed;
    if(this.y <= this.targetY){
      for(let i=0; i<80; i++){
        particles.push(new Particle(this.x, this.y, this.color));
      }
      fireworks.splice(fireworks.indexOf(this), 1);
    }
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Particle {
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = random(1, 5);
    this.angle = random(0, Math.PI*2);
    this.alpha = 1;
  }
  update(){
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.alpha -= 0.02;
    if(this.alpha <= 0) particles.splice(particles.indexOf(this), 1);
  }
  draw(){
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
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



let state = 0; // 0=front, 1=message, 2=shayari

function changeCard(){
    const card = document.getElementById("mainCard");
    const msg = document.getElementById("messagePage");
    const shy = document.getElementById("shayariPage");

    state++;

    if(state === 1){ // flip & show message
        card.classList.add("flip");
        msg.style.display = "block";
        shy.style.display = "none";
    }
    else if(state === 2){ // stay flip & show shayari
        card.classList.add("flip");
        msg.style.display = "none";
        shy.style.display = "block";
    }
    else{               // third click → reset to start
        state = 0;
        card.classList.remove("flip");
        msg.style.display = "block";
        shy.style.display = "none";
    }
}






function playMusic(){
    const music = document.getElementById("bgMusic");

    music.muted = false;
    music.play().catch(()=>{});

    // Optional: Button text change after play
    document.querySelector(".play-btn").innerText = "Playing... 💖";
}






