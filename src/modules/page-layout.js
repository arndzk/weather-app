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
