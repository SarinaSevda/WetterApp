function updateWeatherInformation(response) {
  console.log(response.data.temperature.current);
  let temperatureValue = document.querySelector("#temperature-value");
  let currentTemperature = Math.round(response.data.temperature.current);
  temperatureValue.innerHTML = currentTemperature;
}

function searchCity(city) {
  let apiKey = "4569530f182bfa0dfo5t468f004ad4c8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeatherInformation);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Antalya");
