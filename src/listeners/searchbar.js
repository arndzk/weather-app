import { getCurrentWeather, getForecastWeather } from '../modules/api-calls';
import {
  displayCurrentWeather,
  displayForecastWeather,
} from '../modules/data-displays';
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
      await hideGreetingMsg(showLoadingSpinner);
      const currentWeather = await getCurrentWeather(searchbar.value);
      const forecastWeather = await getForecastWeather(searchbar.value);
      await hideLoadingSpinner();
      await buildWeatherDisplay();
      await buildForecastDisplay();
      displayCurrentWeather(currentWeather);
      displayForecastWeather(forecastWeather);
    }
  });
};

export default addListenerSubmitSearchByEnter;
