const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`;

document.body.appendChild(bgImage);