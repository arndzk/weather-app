import selectElement from '../utils/element-selector';
import addListenerSubmitSearchByEnter from '../listeners/searchbar';
import addListenerSubmitSearchByClick from '../listeners/searchbar-icon';

const bindEventHandlers = () => {
  const greetingMsg = selectElement('greeting-msg');
  const searchbar = selectElement('location-search');
  addListenerSubmitSearchByEnter(searchbar, greetingMsg);
  const searchbarIcon = selectElement('search-bar-icon');
  addListenerSubmitSearchByClick(searchbar, searchbarIcon);
};

export default bindEventHandlers;
