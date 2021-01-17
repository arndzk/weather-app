import createElement from '../utils/element-creator';
import appendElement from '../utils/element-appender';
import selectElement from '../utils/element-selector';

const displayErrorCityNotFound = () => {
  const reportCard = selectElement('report-card');
  reportCard.innerHTML = '';
  const errorMsg = createElement('div', 'error-msg-city', 'error-msg');
  appendElement('report-card', errorMsg);
  const errorMsgTxt = createElement(
    'span',
    'error-msg-city-text',
    null,
    `City not found! Try again?`
  );
  appendElement('error-msg-city', errorMsgTxt);
};

export { displayErrorCityNotFound };
