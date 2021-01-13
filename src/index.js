require('babel-polyfill');

getCurrentWeather();

async function getCurrentWeather() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Athens,GR&units=metric&appid=081c1b58a25687e5825ff83fea5dc34a`,
    { mode: 'cors' }
  );
  const currentWeatherData = await response.json();
  const processedCurrentData = processCurrentData(currentWeatherData)
  console.log(currentWeatherData);
  console.log(processedCurrentData);
}

const processCurrentData = (weatherData) => {
    const objCurrentProcessedData = {
        city_name: weatherData.name,
        city_country: weatherData.sys.country,
        sunrise: weatherData.sys.sunrise,
        sunset: weatherData.sys.sunset,
        desc: weatherData.weather[0].description,
        desc_icon: weatherData.weather[0].icon,
        temp: weatherData.main.temp,
        temp_feels_like: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        temp_max: weatherData.main.temp_max,
        temp_min: weatherData.main.temp_min
    }
    return objCurrentProcessedData;
}
