document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let seconds = 0;
    let isRunning = false;
  
    const display = document.getElementById("display");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    const resetBtn = document.getElementById("resetBtn");
  
    function formatTime(time) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
  
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  
    function startTimer() {
      isRunning = true;
      timer = setInterval(function () {
        seconds++;
        display.textContent = formatTime(seconds);
      }, 1000);
    }
  
    function stopTimer() {
      isRunning = false;
      clearInterval(timer);
    }
  
    function resetTimer() {
      stopTimer();
      seconds = 0;
      display.textContent = formatTime(seconds);
    }
  
    startBtn.addEventListener("click", function () {
      if (!isRunning) {
        startTimer();
      }
    });
  
    stopBtn.addEventListener("click", function () {
      if (isRunning) {
        stopTimer();
      }
    });
  
    resetBtn.addEventListener("click", function () {
      resetTimer();
    });
  });
  