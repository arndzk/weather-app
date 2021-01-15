const getCurrentWeather = async () => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Stilís,GR&units=metric&appid=081c1b58a25687e5825ff83fea5dc34a`,
    { mode: 'cors' }
  );
  const currentWeatherData = await response.json();
  const processedCurrentData = processCurrentData(currentWeatherData);
  return processedCurrentData;
};

const getForecastWeather = async () => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=Stilís,GR&units=metric&appid=081c1b58a25687e5825ff83fea5dc34a`,
    { mode: 'cors' }
  );
  const forecastWeatherData = await response.json();
  const processedForecastData = processForecastData(forecastWeatherData);
  return processedForecastData;
};

const processCurrentData = (weatherData) => {
  console.log(weatherData);
  const objCurrentProcessedData = {
    city_name: weatherData.name,
    city_country: weatherData.sys.country,
    sunrise: weatherData.sys.sunrise,
    sunset: weatherData.sys.sunset,
    timezone: weatherData.timezone,
    desc: weatherData.weather[0].description,
    desc_icon: weatherData.weather[0].icon,
    temp: weatherData.main.temp,
    temp_feels_like: weatherData.main.feels_like,
    humidity: weatherData.main.humidity,
    rain: weatherData.pop,
    temp_max: weatherData.main.temp_max,
    temp_min: weatherData.main.temp_min,
  };
  return objCurrentProcessedData;
};

const processForecastData = (weatherData) => {
  let forecastList = [];
  forecastList = weatherData.list;
  const filteredForecastList = forecastList.filter((report) =>
    report.dt_txt.includes('12:00:00')
  );
  const processedForecastData = [];
  filteredForecastList.forEach((day) => {
    processedForecastData.push({
      date_timestamp: day.dt,
      desc: day.weather[0].description,
      desc_icon: day.weather[0].icon,
      temp: day.main.temp,
      rain: day.pop,
    });
  });
  console.log(filteredForecastList);
  processedForecastData.splice(0, 1);
  return processedForecastData;
};

export { getCurrentWeather, getForecastWeather };
