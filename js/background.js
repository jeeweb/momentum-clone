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
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url(img/background/${chosenImage})`;
