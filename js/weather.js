const API_KEY = "51b0f806de3cf1824ff4c58d036c95ce";
function onGeoOk(position){
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      //weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      console.log(data);
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
