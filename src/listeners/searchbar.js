import { getCurrentWeather, getForecastWeather } from '../modules/api-calls';
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

const addListenerSubmitSearchByEnter = (searchbar) => {
  searchbar.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
      if (searchbar.value === '') {
        searchbar.parentNode.classList.add('error');
      } else {
        if (searchbar.parentNode.classList.contains('error')) {
          searchbar.parentNode.classList.remove('error');
        }
        await hideGreetingMsg(showLoadingSpinner);
        const currentWeather = await getCurrentWeather(searchbar.value);
        if (
          'message' in currentWeather &&
          currentWeather.message === 'city not found'
        ) {
          displayErrorCityNotFound();
        } else {
          const forecastWeather = await getForecastWeather(searchbar.value);
          await hideLoadingSpinner();
          await buildWeatherDisplay();
          await buildForecastDisplay();
          displayCurrentWeather(currentWeather);
          displayForecastWeather(forecastWeather);
        }
      }
    }
  });
};

export default addListenerSubmitSearchByEnter;
