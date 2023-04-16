let presentDay = new Date();
let hour = presentDay.getHours();
if (hour < 10) {
  hour = "0" + hour;
}
let minutes = presentDay.getMinutes();
if (minutes < 10) {
  hour = "0" + hour;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[presentDay.getDay()];
let time = document.querySelector("#day");
time.innerHTML = `${day}, ${hour}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "a2459a6fefa833ef17e266c4bd3e8e03";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(apiUrl);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  document.querySelector("#city").innerHTML = city;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "a2459a6fefa833ef17e266c4bd3e8e03";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("button");
currentLocationButton.addEventListener("click", getCurrentLocation);

//function search(event) {
//event.preventDefault();
// let searchInput = document.querySelector("#search-input");
// let city = document.querySelector("#city");
// city.innerHTML = searchInput.value;
//}

//let submitInput = document.querySelector("#search-form");
//submitInput.addEventListener("submit", search);

//function temperatureFahrenheit(event) {
// event.preventDefault();
//let temperature = document.querySelector("#temp");
//temperature.innerHTML = 50;
//}

//let tempfarh = document.querySelector("#farh-link");
//tempfarh.addEventListener("click", temperatureFahrenheit);

//function temperatureCelsius(event) {
// event.preventDefault();
//let temperature = document.querySelector("#temp");
//temperature.innerHTML = 10;
//}

//let tempcel = document.querySelector("#celsius-link");
//tempcel.addEventListener("click", temperatureCelsius);
