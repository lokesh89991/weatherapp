async function fetchWeather() {
    const city = document.getElementById("cityInput").value || "Bangalore"; // Default city
    const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '19affb7ce7msh3b1643d1d1fb994p1fd7e5jsn6fb78c1aa592',
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log("Full API Response:", data);

   
        const tempKelvin = data.temp || data.main?.temp;
        const humidity = data.humidity || data.main?.humidity;
        const pressure = data.pressure || data.main?.pressure;
        const windSpeed = data.wind?.speed;
        const weatherDescription = data.weather?.[0]?.description;

      
        document.getElementById("cityName").innerText = city;

      
        if (tempKelvin !== undefined) {
            const tempCelsius = (tempKelvin - 273.15).toFixed(2);
            document.getElementById("temp").innerText = `${tempCelsius}°C`;
        } else {
            document.getElementById("temp").innerText = "Data not found";
        }

        if (humidity !== undefined && pressure !== undefined) {
            document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
            document.getElementById("pressure").innerText = `Pressure: ${pressure} hPa`;
        } else {
            document.getElementById("humidity").innerText = "Data not found";
        }

        if (windSpeed !== undefined && weatherDescription) {
            document.getElementById("windSpeed").innerText = `Wind: ${windSpeed} m/s`;
            document.getElementById("weatherDesc").innerText = `Weather: ${weatherDescription}`;
        } else {
            document.getElementById("windSpeed").innerText = "Data not found";
        }

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}


fetchWeather();
