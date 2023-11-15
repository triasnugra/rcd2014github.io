// script.js
function countdown() {
  const targetDate = new Date("2024-03-11T00:00:00Z"); // Tanggal Ramadhan 1445 H/2024
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "<span>Ramadhan has started!</span>";
  }
}

countdown();
const interval = setInterval(countdown, 1000);
