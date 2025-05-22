    // Target time: 2025-07-14 12:00 SGT (UTC+8)
    const targetDate = new Date("2025-07-14T12:00:00+08:00");

    function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById("h-day").textContent = "00";
        document.getElementById("h-hour").textContent = "00";
        document.getElementById("h-min").textContent = "00";
        document.getElementById("h-sec").textContent = "00";
        clearInterval(timer);
        return;
      }

      const totalSec = Math.floor(diff / 1000);
      const days = Math.floor(totalSec / (3600 * 24));
      const hours = Math.floor((totalSec % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSec % 3600) / 60);
      const seconds = totalSec % 60;

      document.getElementById("h-day").textContent = days;
      document.getElementById("h-hour").textContent = pad(hours);
      document.getElementById("h-min").textContent = pad(minutes);
      document.getElementById("h-sec").textContent = pad(seconds);
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
