import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import buildSignature from '../utils/signature-builder';

const buildHeader = () => {
  const header = createElement('header', 'header');
  appendElement('content', header);
  const logoContainer = createElement('div', 'logo-container');
  const titleContainer = createElement('div', 'title-container');
  appendElement('header', logoContainer);
  appendElement('header', titleContainer);
  const logoImage = createElement('img', 'logo-image');
  logoImage.src =
    'https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_32x32.png';
  appendElement('logo-container', logoImage);
  const titleSpan = createElement('spand', 'title-span', null, 'weather app');
  appendElement('title-container', titleSpan);
};

const buildMain = () => {
  const main = createElement('main', 'main');
  appendElement('content', main);
  const mainChildrenWrapper = createElement('div', 'main-children-wrapper');
  appendElement('main', mainChildrenWrapper);

  const locationControls = createElement('div', 'location-controls');
  appendElement('main-children-wrapper', locationControls);
  const searchBar = createElement('input', 'location-search');
  searchBar.setAttribute('type', 'search');
  appendElement('location-controls', searchBar);

  const reportCard = createElement('div', 'report-card');
  appendElement('main-children-wrapper', reportCard);
  const currentReport = createElement('div', 'current-report');
  appendElement('report-card', currentReport);

  const currentWeatherWrapper = createElement('div', 'current-weather-wrapper');
  appendElement('current-report', currentWeatherWrapper);

  const cityNameWrapper = createElement('div', 'city-name-wrapper');
  const weatherConditionWrapper = createElement(
    'div',
    'weather-condition-wrapper'
  );
  const temperatureWrapper = createElement('div', 'temperature-wrapper');
  const dataWrapper = createElement('div', 'data-wrapper');
  appendElement('current-weather-wrapper', cityNameWrapper);
  appendElement('current-weather-wrapper', weatherConditionWrapper);
  appendElement('current-weather-wrapper', temperatureWrapper);
  appendElement('current-weather-wrapper', dataWrapper);

  const cityName = createElement('span', 'city-name');
  const weatherCondition = createElement('img', 'weather-condition');
  const tempActual = createElement('span', 'temp-actual');
  const tempFeelsLike = createElement('span', 'temp-feels-like');
  appendElement('city-name-wrapper', cityName);
  appendElement('weather-condition-wrapper', weatherCondition);
  appendElement('temperature-wrapper', tempActual);
  appendElement('temperature-wrapper', tempFeelsLike);

  const dataLeft = createElement('div', 'data-left', 'data-display');
  const dataMiddle = createElement('div', 'data-middle', 'data-display');
  const dataRight = createElement('div', 'data-right', 'data-display');
  appendElement('data-wrapper', dataLeft);
  appendElement('data-wrapper', dataMiddle);
  appendElement('data-wrapper', dataRight);

  const tempLow = createElement('span', 'temp-low');
  const tempHigh = createElement('span', 'temp-high');
  appendElement('data-left', tempLow);
  appendElement('data-left', tempHigh);

  const humidity = createElement('span', 'humidity');
  const precipitation = createElement('span', 'precipitation');
  appendElement('data-middle', humidity);
  appendElement('data-middle', precipitation);

  const sunrise = createElement('span', 'sunrise');
  const sunset = createElement('span', 'sunset');
  appendElement('data-right', sunrise);
  appendElement('data-right', sunset);

  const forecastWeatherWrapper = createElement(
    'div',
    'forecast-weather-wrapper'
  );
  appendElement('current-report', forecastWeatherWrapper);
};

const buildFooter = () => {
  const footer = createElement('footer', 'footer');
  appendElement('content', footer);
  buildSignature(footer);
};

const buildPageLayout = () => {
  buildHeader();
  buildMain();
  buildFooter();
};

export default buildPageLayout;
