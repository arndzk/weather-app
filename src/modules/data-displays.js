import {
  convertTimestampTime,
  convertTimestampDate,
} from '../utils/timestamp-converter';
import selectElement from '../utils/element-selector';

const displayCurrentWeather = (currentWeather) => {
  const cityName = selectElement('city-name');
  cityName.textContent = currentWeather.city_name;
  const weatherCondition = selectElement('weather-condition');
  weatherCondition.src = `http://openweathermap.org/img/wn/${currentWeather.desc_icon}@4x.png`;
  const weatherConditionDesc = selectElement('weather-condition-desc');
  weatherConditionDesc.textContent = currentWeather.desc
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
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
    precipitation.textContent = `Precipitation: ${currentWeather.rain * 100}%`;
  } else {
    precipitation.textContent = `Precipitation: 0%`;
  }
  const sunrise = selectElement('sunrise');
  sunrise.textContent = `Sunrise: ${convertTimestampTime(
    currentWeather.sunrise,
    currentWeather.timezone
  )}`;
  const sunset = selectElement('sunset');
  sunset.textContent = `Sunset: ${convertTimestampTime(
    currentWeather.sunset,
    currentWeather.timezone
  )}`;
};

const displayForecastWeather = (forecastWeather) => {
  let i = 0;
  forecastWeather.forEach((day) => {
    const forecastDate = selectElement(`forecast-date-${i + 1}`);
    forecastDate.textContent = convertTimestampDate(day.date_timestamp);
    const forecastWeatherCondition = selectElement(
      `forecast-weather-condition-${i + 1}`
    );
    forecastWeatherCondition.src = `http://openweathermap.org/img/wn/${day.desc_icon}@2x.png`;
    const forecastWeatherConditionDesc = selectElement(
      `forecast-weather-condition-desc-${i + 1}`
    );
    forecastWeatherConditionDesc.textContent = day.desc
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
    const forecastTemperature = selectElement(`forecast-temperature-${i + 1}`);
    forecastTemperature.textContent = `${day.temp}°C`;
    const forecastPrecipitation = selectElement(
      `forecast-precipitation-${i + 1}`
    );
    if (day.rain != undefined) {
      forecastPrecipitation.textContent = `${Math.floor(day.rain * 100)}%`;
    } else {
      forecastPrecipitation.textContent = '0%';
    }
    i++;
  });
};

export { displayCurrentWeather, displayForecastWeather };
