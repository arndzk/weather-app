import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';

const showLoadingSpinner = () => {
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

export default showLoadingSpinner;
