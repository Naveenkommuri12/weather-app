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

    function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod === 200) {
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    const weatherText = `Temperature: ${temperature}°C<br>Description: ${description}`;

                    weatherInfo.innerHTML = `Weather in ${city}:<br>${weatherText}`;
                } else {
                    weatherInfo.innerHTML = "City not found. Please try again.";
                }
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }
});
