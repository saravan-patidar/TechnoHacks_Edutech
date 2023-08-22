// Count Down Time

const outputTimer = document.getElementById("days");
const inputTimer = document.getElementById("input");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let targetDate;
let intervalClose;
let isIntervalRunning = false;


startBtn.addEventListener("click", (e) => {
    if (inputTimer.value!=="") {
        targetDate = new Date(inputTimer.value);
        intervalClose = setInterval(updateCountdown, 1000);
        isIntervalRunning = true;
        startBtn.disabled = true;
    }
});

resetBtn.addEventListener("click", () => {
    inputTimer.value = "";
    clearInterval(intervalClose);
    outputTimer.textContent = "00: 00 : 00 : 00";
    isIntervalRunning = false;
    startBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalClose);
    isIntervalRunning = false;
    startBtn.disabled = false;
});
// clearInterval(inter);

function updateCountdown() {

    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    let Day = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let Hour = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let Minute = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let Second = Math.floor((remainingTime % (1000 * 60)) / 1000);

    Day = Day.toString().padStart(2, "0");
    Hour = Hour.toString().padStart(2, "0");
    Minute = Minute.toString().padStart(2, "0");
    Second = Second.toString().padStart(2, "0");

    outputTimer.textContent = `${Day}:${Hour}:${Minute}:${Second}`;

}


/// Toggle Button--

const toggle = document.getElementById('toggle');
const countdownTimer  = document.getElementById('countdown-timer');
const countdown  = document.getElementById('countdown');


toggle.addEventListener('change',()=>{
    if(toggle.checked){
        countdown.style.display="flex";
        countdown.style.transition = ".8s";
        countdownTimer.style.display = "none";
        countdownTimer.style.transition = ".8s";
    }
    else{
        countdown.style.display="none";
        countdown.style.transition = ".8s";
        countdownTimer.style.transition = ".8s";
        countdownTimer.style.display = "flex";
    }
});


// ----Timer count -------

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let intervalId;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function updateTimer() {
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime + elapsedTime;
    const time = new Date(deltaTime);
    const hours = time.getUTCHours().toString().padStart(2, "0");
    const minutes = time.getUTCMinutes().toString().padStart(2, "0");
    const seconds = time.getUTCSeconds().toString().padStart(2, "0");
    timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener("click", () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTimer, 1000);
        isRunning = true;
    }
});

stopButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(intervalId);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    elapsedTime = 0;
    timerElement.textContent = "00:00:00";
    isRunning = false;
});

// Initial call to reset the timer display
resetButton.click();


