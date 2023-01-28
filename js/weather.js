const API_KEY = "51b0f806de3cf1824ff4c58d036c95ce";
function onGeoOk(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#jsLocation");
      const weatherIcon = document.querySelector("#jsWeatherIcon");
      const weather = document.querySelector("#jsWeather");
      const temp = document.querySelector("#jsTemp");
      city.innerText = data.name;
      weatherIcon.src = `img/weather-icons/${data.weather[0].icon}.png`;
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = ` ${Math.round(data.main.temp)}℃`;
      console.log(data);
    });
}
function onGeoError() {
  alert("위치를 가져올 수 없어 날씨를 알려드릴 수 없습니다😢");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
