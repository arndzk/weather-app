import './styles/styles.css';
import buildPageLayout from './modules/page-layout';
import {
  displayCurrentWeather,
  displayForecastWeather,
} from './modules/data-displays';

const init = () => {
  buildPageLayout();
};

const displayWeather = () => {
  displayCurrentWeather();
  displayForecastWeather();
};

init();
displayWeather();
