// 🎯 New Year Target Date Set
const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

// Agle saal ke liye: "Jan 1, 2026 00:00:00"

const timerElement = document.getElementById("timer");

let countdown = setInterval(()=>{

    let now = new Date().getTime();
    let diff = targetDate - now;

    // Time math
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // ⏳ Show time on HTML page
    timerElement.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    // ⛔ Time Finished
    if(diff <= 0){
        clearInterval(countdown);
        timerElement.innerHTML = "🎉 Happy New Year 💖";
        
        setTimeout(()=>{
            // Next page auto open
            window.location.href = "fireworks.html"; // yaha apna next page likho
        }, 2000);
    }

}, 1000);



