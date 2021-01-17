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
  const searchBarWrapper = createElement(
    'div',
    'search-bar-wrapper',
    'no-error'
  );
  appendElement('location-controls', searchBarWrapper);
  const searchBarIcon = createElement(
    'span',
    'search-bar-icon',
    'material-icons',
    'search'
  );
  appendElement('search-bar-wrapper', searchBarIcon);
  const searchBar = createElement('input', 'location-search');
  searchBar.setAttribute('type', 'search');
  searchBar.setAttribute('placeholder', 'Enter a location...');
  appendElement('search-bar-wrapper', searchBar);

  const reportCard = createElement('div', 'report-card');
  appendElement('main-children-wrapper', reportCard);

  buildGreetingMessage();
};

const buildGreetingMessage = () => {
  const greetingMsgWrapper = createElement('div', 'greeting-msg');
  appendElement('report-card', greetingMsgWrapper);
  const greetingMsgImg = createElement('img', 'greeting-msg-img');
  greetingMsgImg.src =
    'https://raw.githubusercontent.com/arndzk/weather-app/main/src/assets/logo_open_weather.png';
  appendElement('greeting-msg', greetingMsgImg);
  const greetingMsgTxtWrapper = createElement(
    'div',
    'greeting-msg-txt-wrapper'
  );
  appendElement('greeting-msg', greetingMsgTxtWrapper);
  const greetingMsgTxtWelcome = createElement(
    'span',
    'greeting-msg-txt-welcome',
    null,
    'Welcome!'
  );
  appendElement('greeting-msg-txt-wrapper', greetingMsgTxtWelcome);
  const greetingMsgTxtInstr = createElement(
    'span',
    'greeting-msg-txt-instr',
    null,
    'Enter a location in the searchbar to receive a weather report!'
  );
  appendElement('greeting-msg-txt-wrapper', greetingMsgTxtInstr);
};

const buildWeatherDisplay = async () => {
  const currentReport = createElement('div', 'current-report');
  appendElement('report-card', currentReport);

  const currentWeatherWrapper = createElement('div', 'current-weather-wrapper');
  appendElement('current-report', currentWeatherWrapper);

  const cityNameWrapper = createElement('div', 'city-name-wrapper');
  const weatherConditionWrapper = createElement(
    'div',
    'weather-condition-wrapper'
  );
  const weatherConditionDescWrapper = createElement(
    'div',
    'weather-condition-desc-wrapper'
  );
  const temperatureWrapper = createElement('div', 'temperature-wrapper');
  const dataWrapper = createElement('div', 'data-wrapper');
  appendElement('current-weather-wrapper', cityNameWrapper);
  appendElement('current-weather-wrapper', weatherConditionWrapper);
  appendElement('current-weather-wrapper', weatherConditionDescWrapper);
  appendElement('current-weather-wrapper', temperatureWrapper);
  appendElement('current-weather-wrapper', dataWrapper);

  const cityName = createElement('span', 'city-name');
  const weatherCondition = createElement('img', 'weather-condition');
  const weatherConditionDesc = createElement('span', 'weather-condition-desc');
  const tempActual = createElement('span', 'temp-actual');
  const tempFeelsLike = createElement('span', 'temp-feels-like');
  appendElement('city-name-wrapper', cityName);
  appendElement('weather-condition-wrapper', weatherCondition);
  appendElement('weather-condition-desc-wrapper', weatherConditionDesc);
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
};

const buildForecastDisplay = async () => {
  const forecastWeatherWrapper = createElement(
    'div',
    'forecast-weather-wrapper'
  );
  appendElement('current-report', forecastWeatherWrapper);

  for (let i = 0; i < 4; i++) {
    const forecastDayWrapper = createElement(
      'div',
      `forecast-day-wrapper-${i + 1}`,
      'forecast-day-wrapper'
    );
    appendElement('forecast-weather-wrapper', forecastDayWrapper);
    const forecastDateWrapper = createElement(
      'div',
      `forecast-date-wrapper-${i + 1}`,
      'forecast-date-wrapper'
    );
    appendElement(`forecast-day-wrapper-${i + 1}`, forecastDateWrapper);
    const forecastDate = createElement(
      'span',
      `forecast-date-${i + 1}`,
      'forecast-date'
    );
    appendElement(`forecast-date-wrapper-${i + 1}`, forecastDate);
    const forecastWeatherConditionWrapper = createElement(
      'div',
      `forecast-weather-condition-wrapper-${i + 1}`,
      'forecast-weather-condition-wrapper'
    );
    appendElement(
      `forecast-day-wrapper-${i + 1}`,
      forecastWeatherConditionWrapper
    );
    const forecastWeatherCondition = createElement(
      'img',
      `forecast-weather-condition-${i + 1}`,
      'forecast-weather-condition'
    );
    appendElement(
      `forecast-weather-condition-wrapper-${i + 1}`,
      forecastWeatherCondition
    );
    const forecastWeatherConditionDescWrapper = createElement(
      'div',
      `forecast-weather-condition-desc-wrapper-${i + 1}`,
      'forecast-weather-condition-desc-wrapper'
    );
    appendElement(
      `forecast-day-wrapper-${i + 1}`,
      forecastWeatherConditionDescWrapper
    );
    const forecastWeatherConditionDesc = createElement(
      'span',
      `forecast-weather-condition-desc-${i + 1}`,
      'forecast-weather-condition-desc'
    );
    appendElement(
      `forecast-weather-condition-desc-wrapper-${i + 1}`,
      forecastWeatherConditionDesc
    );
    const forecastTemperatureWrapper = createElement(
      'div',
      `forecast-temperature-wrapper-${i + 1}`,
      'forecast-temperature-wrapper'
    );
    appendElement(`forecast-day-wrapper-${i + 1}`, forecastTemperatureWrapper);
    const forecastTemperature = createElement(
      'span',
      `forecast-temperature-${i + 1}`,
      'forecast-temperature'
    );
    appendElement(`forecast-temperature-wrapper-${i + 1}`, forecastTemperature);
    const forecastPrecipitationWrapper = createElement(
      'div',
      `forecast-precipitation-wrapper-${i + 1}`,
      'forecast-precipitation-wrapper'
    );
    appendElement(
      `forecast-day-wrapper-${i + 1}`,
      forecastPrecipitationWrapper
    );
    const forecastPrecipitation = createElement(
      'span',
      `forecast-precipitation-${i + 1}`,
      'forecast-precipitation'
    );
    appendElement(
      `forecast-precipitation-wrapper-${i + 1}`,
      forecastPrecipitation
    );
  }
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

export { buildPageLayout, buildWeatherDisplay, buildForecastDisplay };
