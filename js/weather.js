const API_KEY = "51b0f806de3cf1824ff4c58d036c95ce";
function onGeoOk(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#jsWeather");
      const city = document.querySelector("#jsLocation");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      console.log(data);
    });
}
function onGeoError() {
  alert("위치를 가져올 수 없어 날씨를 알려드릴 수 없습니다😢");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
