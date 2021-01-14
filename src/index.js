require('babel-polyfill');
import moment from 'moment-timezone';
import './styles/styles.css';
import buildPageLayout from './modules/page-layout';
import selectElement from './utils/element-selector';

const init = () => {
  buildPageLayout();
};

const displayWeather = async () => {
  const currentWeather = await getCurrentWeather();
  const cityName = selectElement('city-name');
  cityName.textContent = currentWeather.city_name;
  const weatherCondition = selectElement('weather-condition');
  weatherCondition.src = `http://openweathermap.org/img/wn/${currentWeather.desc_icon}@4x.png`;
  const tempActual = selectElement('temp-actual');
  tempActual.textContent = `${currentWeather.temp}°C`;
  const tempFeelsLike = selectElement('temp-feels-like');
  tempFeelsLike.textContent = `Feels like ${currentWeather.temp_feels_like}°C`;
  const tempLow = selectElement('temp-low');
  tempLow.textContent = `Low: ${currentWeather.temp_min}°C`;
  const tempHigh = selectElement('temp-high');
  tempHigh.textContent = `High: ${currentWeather.temp_max}°C`;
  const humidity = selectElement('humidity');
  const precipitation = selectElement('precipitation');
  humidity.textContent = `Humidity: ${currentWeather.humidity}%`;
  if (currentWeather.rain != undefined) {
    precipitation.textContent = `Precipitation: ${currentWeather.rain}`;
  } else {
    precipitation.textContent = `Precipitation: -`;
  }
  const sunrise = selectElement('sunrise');
  sunrise.textContent = `Sunrise: ${convertTimestamp(
    currentWeather.sunrise,
    currentWeather.timezone
  )}`;
  const sunset = selectElement('sunset');
  sunset.textContent = `Sunset: ${convertTimestamp(
    currentWeather.sunset,
    currentWeather.timezone
  )}`;
};

async function getCurrentWeather() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Athens,GR&units=metric&appid=081c1b58a25687e5825ff83fea5dc34a`,
    { mode: 'cors' }
  );
  const currentWeatherData = await response.json();
  const processedCurrentData = processCurrentData(currentWeatherData);
  console.log(currentWeatherData);
  return processedCurrentData;
}

async function getForecastWeather() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=Athens,GR&units=metric&appid=081c1b58a25687e5825ff83fea5dc34a`,
    { mode: 'cors' }
  );
  const forecastWeatherData = await response.json();
  //const processedForecastData =
  processForecastData(forecastWeatherData);
  console.log(forecastWeatherData);
  //return processedForecastData;
}

const processCurrentData = (weatherData) => {
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
    rain: weatherData.main.rain,
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
      desc: day.weather[0].description,
      desc_icon: day.weather[0].icon,
      temp: day.main.temp,
      rain: day.rain,
    });
  });
  console.log('filtered forecast');
  console.log(filteredForecastList);
  console.log(processedForecastData);
  //const objForecastWeatherData = {};
  //return objForecastWeatherData;
};

const convertTimestamp = (timestamp, timezone) => {
  // let date = new Date(timestamp * 10000);
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let time = hours + ':' + minutes;
  let tz = moment.tz.guess();
  let time = moment.tz(timestamp * 1000, tz).format('HH:mm');
  return time;
};

init();
displayWeather();
