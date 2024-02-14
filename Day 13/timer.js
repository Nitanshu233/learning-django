let timer;
let Days = 0;
let hours = 23;
let minutes = 59;
let seconds = 59;
let Microseconds =0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTimer, 10);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  Days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  Microseconds=0;
  updateDisplay();
}

function updateTimer() {
  Microseconds++;
  if (Microseconds === 100) {
    seconds++;
    Microseconds = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  if (hours === 24) {
    Days++;
    hours = 0;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('Days').innerText = formatTime(Days);
  document.getElementById('hours').innerText = formatTime(hours);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
  document.getElementById('Microseconds').innerText = formatTime(Microseconds);
}

function formatTime(time) {
  return (time < 10 ? '0' : '') + time;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);