const body = document.querySelector("body");
const images = [
  "patterns1.png",
  "patterns2.png",
  "patterns3.png",
  "patterns4.png",
  "patterns6.png",
  "patterns7.png",
  "patterns8.png",
  "patterns9.png",
  "patterns10.png",
  "patterns11.png",
  "image12.jpg",
  "image13.jpg",
];
const colors = ["#da93c2", "#e64a19", "#388e3c", "#304ffe", "#fbc02d"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const chosenColor = colors[Math.floor(Math.random() * colors.length)];

body.style.backgroundImage = `url(img/background/${chosenImage})`;
document.documentElement.style.setProperty("--point", chosenColor);
