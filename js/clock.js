const calendar = document.querySelector("#jsDate");
const clockIcon = document.querySelector(".time__clock > i.fas");
const clock = document.querySelector("#jsClock");

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();

  calendar.innerText = `${year}. ${month + 1}. ${date}. ${weekday[day]}`;
}

function getClock() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  if (5 < hours && hours < 18) {
    clockIcon.classList.add("fa-sun");
    clockIcon.classList.remove("fa-moon");
  } else {
    clockIcon.classList.add("fa-moon");
    clockIcon.classList.remove("fa-sun");
  }
}

function init() {
  getDate();
  getClock();
}

setInterval(getClock, 1000);
init();
