document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "e56761e3fb436a5fb4a516741cfe0343";
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    getWeatherBtn.addEventListener("click", function () {
        const city = cityInput.value;
        if (city) {
            fetchWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    });

