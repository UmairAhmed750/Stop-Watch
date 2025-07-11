
  let startTime, updatedTime, difference = 0, timerInterval;
  let running = false;

  function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10); // 2-digit milliseconds

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    document.getElementById('display').innerText = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  function start() {
    if (!running) {
      startTime = new Date().getTime() - (difference || 0);
      timerInterval = setInterval(updateTime, 10); // Update every 10ms
      running = true;
    }
  }

  function stop() {
    if (running) {
      clearInterval(timerInterval);
      running = false;
    }
  }

  function reset() {
    clearInterval(timerInterval);
    document.getElementById('display').innerText = "00:00:00.00";
    difference = 0;
    running = false;
  }
