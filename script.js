  // Set the target date/time in SGT (Singapore Time is UTC+8)
  const targetDate = new Date('2025-07-14T12:00:00+08:00');

  function pad(num) {
    return num.toString().padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Countdown complete
      document.getElementById("h-day").textContent = "0";
      document.getElementById("h-hour").textContent = "00";
      document.getElementById("h-min").textContent = "00";
      document.getElementById("h-sec").textContent = "00";
      clearInterval(countdownInterval);
      return;
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("h-day").textContent = days;
    document.getElementById("h-hour").textContent = pad(hours);
    document.getElementById("h-min").textContent = pad(minutes);
    document.getElementById("h-sec").textContent = pad(seconds);
  }

  // Update countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // initial call
