import {
  getCurrentWeatherByLocation,
  getForecastWeatherByLocation,
} from '../modules/api-calls';
import {
  displayCurrentWeather,
  displayForecastWeather,
} from '../modules/data-displays';
import { displayErrorCityNotFound } from '../modules/error-displays';
import {
  showLoadingSpinner,
  hideLoadingSpinner,
  hideGreetingMsg,
} from '../modules/loading-spinner';
import {
  buildForecastDisplay,
  buildWeatherDisplay,
} from '../modules/page-layout';

const addListenerSubmitSearchByLocation = (locationBtn) => {
  locationBtn.addEventListener('click', async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
};

const success = async (position) => {
  const location = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };
  await hideGreetingMsg(showLoadingSpinner);
  const currentWeather = await getCurrentWeatherByLocation(location);
  // if (
  //   'message' in currentWeather &&
  //   currentWeather.message === 'city not found'
  // ) {
  //   displayErrorCityNotFound();
  // } else {
  const forecastWeather = await getForecastWeatherByLocation(location);
  await hideLoadingSpinner();
  await buildWeatherDisplay();
  await buildForecastDisplay();
  displayCurrentWeather(currentWeather);
  displayForecastWeather(forecastWeather);
  // }
};

const error = (err) => {
  console.warn(`${err.code} ${err.message}`);
};

export default addListenerSubmitSearchByLocation;
