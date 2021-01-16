import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import selectElement from '../utils/element-selector';

const showLoadingSpinner = async () => {
  const loadingMsg = createElement('div', 'loading-msg');
  appendElement('report-card', loadingMsg);
  const loadingSpinnerWrapper = createElement('div', 'loading-spinner-wrapper');
  appendElement('loading-msg', loadingSpinnerWrapper);
  const loadingSpinner = createElement('div', 'loading-spinner');
  appendElement('loading-spinner-wrapper', loadingSpinner);
  const loadingMsgText = createElement(
    'span',
    'loading-msg-text',
    null,
    'Fetching weather data...'
  );
  appendElement('loading-msg', loadingMsgText);
};

const hideLoadingSpinner = async () => {
  console.log('hiding loading spinner...');
  const reportCard = selectElement('report-card');
  reportCard.innerHTML = '';
};

const hideGreetingMsg = async (showLoadingSpinner) => {
  const greetingMsg = selectElement('greeting-msg');
  greetingMsg.remove();
  await showLoadingSpinner();
};

export { showLoadingSpinner, hideLoadingSpinner, hideGreetingMsg };
