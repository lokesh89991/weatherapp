const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=bangalore';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '19affb7ce7msh3b1643d1d1fb994p1fd7e5jsn6fb78c1aa592',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};

async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Convert response to JSON

        console.log("Full API Response:", data); // Log the full response for debugging

        // Extract data (Modify based on API response structure)
        const tempKelvin = data.temp || data.main?.temp;
        const humidity = data.humidity || data.main?.humidity;
        const pressure = data.pressure || data.main?.pressure;
        const windSpeed = data.wind?.speed;
        const weatherDescription = data.weather?.[0]?.description;

        if (tempKelvin !== undefined) {
            const tempCelsius = (tempKelvin - 273.15).toFixed(2);
            console.log(`Temperature: ${tempCelsius}°C`);
        } else {
            console.log("Temperature data not found.");
        }

        if (humidity !== undefined) console.log(`Humidity: ${humidity}%`);
        if (pressure !== undefined) console.log(`Pressure: ${pressure} hPa`);
        if (windSpeed !== undefined) console.log(`Wind Speed: ${windSpeed} m/s`);
        if (weatherDescription) console.log(`Weather: ${weatherDescription}`);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
    
}

// Call the function
fetchWeather();
