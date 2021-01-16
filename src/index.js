import './styles/styles.css';
import { buildPageLayout } from './modules/page-layout';
import bindEventHandlers from './modules/event-handle';
// import {
//   displayCurrentWeather,
//   displayForecastWeather,
// } from './modules/data-displays';

const init = () => {
  buildPageLayout();
  bindEventHandlers();
};

// const displayWeather = () => {
//   displayCurrentWeather();
//   displayForecastWeather();
// };

init();
//displayWeather();
