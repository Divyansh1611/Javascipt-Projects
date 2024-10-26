let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value){
    // console.log("padStart");
    return String(value).padStart(2,"0");
    
}

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}: ${padStart(seconds)}`;
    // console.log("setTimer");
}

function timer(){
    secondsElapsed +=1;
    setTime()
    // console.log("timer");
}

function startClock(){
    if (interval) stopClock()

    interval = setInterval(timer, 1000)
}

function stopClock(){
    clearInterval(interval);
}

function resetClock(){
    stopClock();
    secondsElapsed = 0;
    setTime();
}